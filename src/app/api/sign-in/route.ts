import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
// Mock authentication logic
export async function POST(request: NextRequest) {
	try {
		const { username } = await request.json();

		let token = null;

		if (username === 'user1') {
			token =
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIuZW1haWxAZ21haWwuY29tIiwicm9sZSI6IlVTRVIifQ.IgQln56kjBGc66IAjRMjeJtscM2u--Uz5Ul01r1f874';
		} else if (username === 'admin1') {
			token =
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4xIiwiZW1haWwiOiJhZG1pbi5lbWFpbEBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4ifQ.91VaQcMDdRWOj849ddLZO7pR_qjl_DpHdaaYCYfakkg';
		}

		if (token) {
			const decoded = jwt.decode(token) as any;
			return NextResponse.json({ accessToken: token, ...decoded }, { status: 200 });
		}

		return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
	} catch (error) {
		return NextResponse.json({ error: `Internal Server Error::${error}` }, { status: 500 });
	}
}
