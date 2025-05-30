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

    // Obter dados do corpo da requisição
    const { name, message } = await request.json();

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Nome é obrigatório' },
        { status: 400 }
      );
    }

    // Buscar o item atual
    const { data: currentItem, error: fetchError } = await supabase
      .from('gifts')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchError || !currentItem) {
      return NextResponse.json(
        { error: 'Item não encontrado' },
        { status: 404 }
      );
    }

    console.log('giftedBy:', currentItem);
    // if (currentItem.giftedBy.length >= currentItem.quantity) {
    //   return NextResponse.json(
    //     { error: 'Quantidade máxima de doações atingida' },
    //     { status: 400 }
    //   );
    // }

    // Preparar atualizações
    const updatedGiftedBy = [...(currentItem.giftedBy || []), { name: name.trim() }];

    let updatedMessage = currentItem.message || [];
    if (message && message.trim()) {
      updatedMessage = [...updatedMessage, { message: message.trim() }];
    }

    const { error, data } = await supabase
      .from('gifts')
      .update({
        giftedBy: updatedGiftedBy,
        message: updatedMessage,
      })
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
        { error: 'Item não encontrado após atualização' },
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
