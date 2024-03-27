import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NUXT_ENV_SUPABASE_URL
const supabaseKey = process.env.NUXT_ENV_SUPABASE_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase