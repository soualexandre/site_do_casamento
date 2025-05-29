import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../lib/supabaseClient';

// GET: Buscar todos os presentes
export async function GET() {
  try {
    const { data, error } = await supabase.from('gifts').select('*');

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ gifts: data }, { status: 200 });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT: Atualizar presente por ID
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID do item não fornecido' },
        { status: 400 }
      );
    }

    const payload = await request.json();

    if (payload.gifted && !payload.giftedBy?.trim()) {
      return NextResponse.json(
        { error: 'Nome é obrigatório' },
        { status: 400 }
      );
    }

    const { error, data } = await supabase
      .from('gifts')
      .update(payload)
      .eq('id', id)
      .select();

    if (error) {
      console.error('Supabase Update Error:', error);
      return NextResponse.json(
        { error: 'Erro ao atualizar item no Supabase' },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: 'Item não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, updatedItem: data[0] });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
