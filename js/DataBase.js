import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

class DataBase {
  constructor() {
    this.supabase = createClient(
      "https://unswumzybkmeifdigbfn.supabase.co",
      "KEY",
    );
    
  }
  async GetARowFrow(table, idToRow) {
    try {
        const { data, sak } = await this.supabase
        .from(table)
        .select()
        .eq('id', idToRow);
        return data;
    }
    catch (e) {
        console.log("An Error has occured: " + event);
    }
    
  }
}

export default DataBase;