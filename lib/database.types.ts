export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      rotation: {
        Row: {
          created_at: string | null;
          id: string;
          member1: string | null;
          member2: string | null;
          member3: string | null;
          member4: string | null;
          member5: string | null;
          position: number | null;
          title: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          member1?: string | null;
          member2?: string | null;
          member3?: string | null;
          member4?: string | null;
          member5?: string | null;
          position?: number | null;
          title?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          member1?: string | null;
          member2?: string | null;
          member3?: string | null;
          member4?: string | null;
          member5?: string | null;
          position?: number | null;
          title?: string | null;
          updated_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
