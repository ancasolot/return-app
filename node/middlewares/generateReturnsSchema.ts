export async function generateReturnsSchema(
  ctx: Context,
  next: () => Promise<any>
) {
  const {
    clients: { masterData: masterDataClient },
  } = ctx

  const response = await masterDataClient.generateSchema(ctx)

  ctx.status = 200
  ctx.body = response

  await next()
}
