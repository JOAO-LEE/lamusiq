import { Session, User } from "@supabase/supabase-js";

export interface AuthContext {
  session: Session | null | undefined 
  user: User | null | undefined
  signOut?: () => void
  isLoading?: boolean
}