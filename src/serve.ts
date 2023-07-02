import { Hono } from 'hono/mod.ts'
import { serve } from 'std/http/server.ts'

const app = new Hono()

app.get('/', (c) => c.text('Hello Deno!'))

serve(app.fetch)
