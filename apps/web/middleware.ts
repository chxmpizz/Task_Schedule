import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

const PUBLIC_PATHS = ['/signin', '/register', '/']

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
        return NextResponse.next()
    }

    const hasCookie = (await cookies()).has('access_token')
    if (!hasCookie) {
        return NextResponse.redirect(new URL('/signin', request.url))
    }
}
