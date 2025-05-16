import { prisma } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const createdBy = searchParams.get('createdBy');

		const filter: any = {};
		if (createdBy) filter.createdBy = createdBy === 'USER' ? createdBy : undefined;

		const memoCards = await prisma.memoCard.findMany({
			where: filter,
			orderBy: {
				createdAt: createdBy === 'User' ? 'asc' : 'desc',
			},
		});

		return NextResponse.json(memoCards);
	} catch (error) {
		return NextResponse.json({ error: `Internal Server Error::${error}` }, { status: 500 });
	}
}

export async function POST(request: NextRequest) {
	try {
		const newMemoCard = await request.json();

		const memoCard = await prisma.memoCard.create({
			data: newMemoCard,
		});
		return NextResponse.json({ memoCard }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: `Internal Server Error::${error}` }, { status: 500 });
	}
}
