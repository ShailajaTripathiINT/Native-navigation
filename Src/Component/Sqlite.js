import React,{useState,useEffect} from 'react';
import { View, TextInput, StatusBar, Button,FlatList,Text } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({
  name:"rn_sqlite",
})

export default function Sqlite() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const createTables = () =>{
    db.transaction(txn =>{
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))`,
        [],
        (sqlTxn, res) =>{
          console.log('table created successfully');
        },
        error =>{
          console.log("error on creating table"+ error.message);
        },
      );
    });
  };

  const addCategory = () =>{
    if(!category){
      alert ('Enter Category')
      return false;
    }
    db.transaction(txn =>{
      txn.executeSql(
        `INSERT INTO categories (name) VALUES (?)`,
        [category],
        (sqlTxn, res) =>{
          console.log(`${category} category added successfully`);
          getCategories();
        },
        error =>{
          console.log("error on creating table"+ error.message);
        },
      );
    });
  };

  const getCategories = () =>{
    db.transaction(txn=>{
      txn.executeSql(
        `SELECT * FROM categories ORDER BY id DESC`,
        [],
        (sqlTxn,res)=>{
console.log("categories retrieved successfully");

let len = res.rows.length;

if(len>0){
  let results=[];
  for(let i =0;i<len;i++){
    let item =res.rows.item(i);
    results.push({id:item.id, name:item.name});
  }
  setCategories(results)
}
        },
        error =>{
          console.log('error on getting categories' + error.me)
        }
      )
    })
  }
const renderCategory =({item}) =>{
return (
  <View style={{
    flexDirection:'row',
    paddingVertical:12,
    paddingHorizontal:10,
    borderBottomWidth:1,
    borderColor:'#ddd',
  }}>
    <Text style={{
      marginRight:9
    }}>{item.id}</Text>
    <Text>{item.name}</Text>
  </View>
)
}

 useEffect( () => {
  createTables();
   getCategories();
 }, []);


  return (
    <View>
    
    <StatusBar backgroundColor="orange"/>
    <TextInput
    placeholder = "Enter Category"
    value = {category}
    onChangeText ={setCategory}
    style ={{marginHorizontal:8}}
    />
    <Button title="submit" onPress={addCategory}/>
    <FlatList 
data={categories}
 renderItem ={renderCategory} 
  key={cat =>{
    cat.id
  }}
/>
     </View>
  );
}
