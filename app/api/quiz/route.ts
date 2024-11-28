// import fs from 'fs';
// import path from 'path';
// import { NextRequest, NextResponse } from 'next/server';

// const dataFilePath = path.join(process.cwd(), 'quiz.json');

// export async function GET(req: NextRequest) {
//     try {
//         const { searchParams } = new URL(req.url);
//         const _id = searchParams.get('_id');

//         if (fs.existsSync(dataFilePath)) {
//             const fileData = fs.readFileSync(dataFilePath, 'utf8');
//             const data = JSON.parse(fileData);
//              return NextResponse.json(data, { status: 200 });
//         } else {
//             return NextResponse.json({ error: 'Data file not found' }, { status: 404 });
//         }
//     } catch (error) {
//         const errorMessage = error instanceof Error ? error.message : 'Unknown error';
//         return NextResponse.json({ error: 'Failed to read data', errorMessage }, { status: 500 });
//     }
// }

import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

const dataFilePath = path.join(process.cwd(), 'quiz.json');

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
        }

        if (fs.existsSync(dataFilePath)) {
            const fileData = fs.readFileSync(dataFilePath, 'utf8');
            const data = JSON.parse(fileData);

            if (data[id]) {
                return NextResponse.json(data[id], { status: 200 });
            } else {
                return NextResponse.json({ error: 'Data not available' }, { status: 404 });
            }
        } else {
            return NextResponse.json({ error: 'Data file not found' }, { status: 404 });
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: 'Failed to read data', errorMessage }, { status: 500 });
    }
}