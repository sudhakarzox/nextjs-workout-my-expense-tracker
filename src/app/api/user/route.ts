

export async function GET(request: Request) {
  return Response.json({ sss:"ssss" })
}

export async function POST(request: Request) {
  
  const res = await request.json()
  console.log(res.aa);
  return Response.json({ sss:res })
}