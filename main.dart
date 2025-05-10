
import 'package:flutter/material.dart';

void main() {
  runApp(MainApp());
}

class MainApp extends StatefulWidget {
  
  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {

List<String> taskList = [];

TextEditingController textController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('To_Do App', style: TextStyle(color: const Color.fromARGB(255, 255, 255, 255)),),
          backgroundColor: const Color.fromARGB(255, 0, 225, 255),
          centerTitle: false,
        ),
        body: Column(
          children: [
            Row(
              children: [
             Expanded(child:    Container(
              padding: EdgeInsets.all(20),
              child:  TextField(
                controller: textController,
              decoration: InputDecoration(
                labelText: 'Enter text',
                border: OutlineInputBorder(),
              ),
            ),
            ),
            ),
          Container(
            margin: EdgeInsets.all(20),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(20),
            ),
            child: MaterialButton(
              padding: EdgeInsets.all(10),
              color: Colors.purpleAccent,
              textColor: Colors.white,
              height: 50,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(20),
              ),
              onPressed: () {
                
                setState(() {
                  taskList.add("~"+textController.text);
                  textController.clear();
                });
              },
              child: Text('Add'),
            ),
          ),
              ],
            ),
           
          
            Flexible(
            child: ListView.builder(
              itemCount: taskList.length,
              itemBuilder: (context, index){
              return Row(
              children: [
                Expanded(
                  child: Container(
                    padding: EdgeInsets.all(10),
                    child: Text(
                      taskList[index],
                    ),
                  ),
                ),
               
                MaterialButton(
                 
                  child: Icon(Icons.delete, color: Colors.red,),
                  onPressed: (){
                  
                  setState(() {
                    taskList.removeAt(index);
                  });
                  },
                ),
              ],
            );
            },),
          ),



          ],
          
        ),
      ),
    );
  }
}
