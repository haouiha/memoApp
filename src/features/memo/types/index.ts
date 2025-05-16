import { MemoCard } from '@prisma/client';

export interface MemoCardWithCardNumber extends MemoCard {
	cardNumber: number;
	isNew: boolean;
}
