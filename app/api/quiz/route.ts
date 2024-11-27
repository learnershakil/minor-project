import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

interface Bid {
    _id: string;
    productName: string;
    clerkUserId: string;
    customerEmail: string;
    customerName: string;
    biddingAmount: number;
    imageUrl: string;
    timestamp: string;
}

const dataFilePath = path.join(process.cwd(), 'quiz.json');

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const _id = searchParams.get('_id');

        if (fs.existsSync(dataFilePath)) {
            const fileData = fs.readFileSync(dataFilePath, 'utf8');
            const data = JSON.parse(fileData);
             return NextResponse.json(data, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Data file not found' }, { status: 404 });
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: 'Failed to read data', errorMessage }, { status: 500 });
    }
}