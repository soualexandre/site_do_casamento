
import { NextRequest, NextResponse } from 'next/server';
import { GiftRepository } from '../../lib/db/giftRepository.ts';

export async function GET() {
  try {
    const gifts = await GiftRepository.getAll();
    return NextResponse.json({ gifts });
  } catch (error) {
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

    const payload = await request.json();
    
    if (payload.gifted && !payload.giftedBy?.trim()) {
      return NextResponse.json(
        { error: 'Nome é obrigatório' },
        { status: 400 }
      );
    }

    const success = GiftRepository.update(id, payload);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Item não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}