// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

 
// const allowedOrigins = ['https://localhost:8000']
 

// const corsOptions = {
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
// }

// export function middleware(request: NextRequest) {
  
//   // const accessToken = request.cookies.get('accessToken')?.value;
// 	// const pathUrl = request.nextUrl.pathname;
  
//   // // 로그인 된 사용자가 로그인 페이지 요청 시 / 페이지로 강제 리다이렉트
//   // if (accessToken && pathUrl.startsWith('/login')) {
//   //   return NextResponse.redirect(new URL('/', request.url));
// 	// }
	
//   // // 로그인 미완료된 사용자가 일반 페이지 요청 시 로그인 페이지로 강제 리다이렉트
//   // if (!accessToken && !pathUrl.startsWith('/login')) {
//   //   return NextResponse.redirect(new URL('/login', request.url));
// 	// }
  

//   // 모든 출처에서의 요청을 허용할 경우
//   const express = require('express')
//   const cors = require('cors');
  
//   const app = express();
  
//   app.use(cors({
//       origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
//       credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
//   }));


//     //  // Check the origin from the request
//     //  const origin = request.headers.get('origin') ?? ''
//     //  const isAllowedOrigin = allowedOrigins.includes(origin)
    
//     //  // Handle preflighted requests
//     //  const isPreflight = request.method === 'OPTIONS'
    
//     //  if (isPreflight) {
//     //    const preflightHeaders = {
//     //      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
//     //      ...corsOptions,
//     //    }
//     //    return NextResponse.json({}, { headers: preflightHeaders })
//     //  }
    
//     //  // Handle simple requests
//     //  const response = NextResponse.next()
    
//     //  if (isAllowedOrigin) {
//     //    response.headers.set('Access-Control-Allow-Origin', origin)
//     //  }
    
//     //  Object.entries(corsOptions).forEach(([key, value]) => {
//     //    response.headers.set(key, value)
//     //  })
    
//     //  return response

// }


// // export const config = {
// // 	matcher: [
// // /*
// // * 다음 목록들로 시작되는 경로를 미들웨어 체크에서 제외하기:
// // * - api (API routes)
// // * - _next/static (static files)
// // * - _next/image (image optimization files)
// // * - favicon.ico (favicon file)
// // * - server/ (네트워크 요청 경로)
// // */
// //  '/admins/:path*',
// // 		{
// // 		source: '/((?!api|_next/static|_next/image|favicon.ico|server).*)',
// // 		missing: [
// // 			{ type: 'header', key: 'next-router-prefetch' },
// // 			{ type: 'header', key: 'purpose', value: 'prefetch' },
// // 			],
// // 		},
// // 	],
// // };
// // function express() {
// //   throw new Error('Function not implemented.');
// // }




