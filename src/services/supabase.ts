import { createClient } from '@supabase/supabase-js';

import { Database } from '../../types/supabase';

export const supabaseClient = createClient<Database>(
  'https://hyprwbkfoelodwhchuor.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cHJ3Ymtmb2Vsb2R3aGNodW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2NjMyNDAsImV4cCI6MTk5NDIzOTI0MH0.M8Oenuy3L-idMCamLcA0-ekh4cBssu1wI1HXa_Bm_kI'
);