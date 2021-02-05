//TODO:Add functions to handle UI interaction with indexedDB
//
// IndexedDB

/*$('.fa-bars').on('click', function clickHandler(e) {
    e.preventDefault();
    $('body').toggleClass('sidebar-open');
});*/

window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
    IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
    dbVersion = 1;
// Create/open database
var DBOpenRequest = indexedDB.open("offlineTransactions", dbVersion);
// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = function (event) {
    alert("Error loading database");
};

DBOpenRequest.onsuccess = function (event) {
    alert("Database initialised");   
};

// Create an objectStore for this database

//let objectStore = DBOpenRequest.createObjectStore("toDoList", { keyPath: "taskTitle" });

// define what data items the objectStore will contain

/*objectStore.createIndex("hours", "hours", { unique: false });
objectStore.createIndex("minutes", "minutes", { unique: false });
objectStore.createIndex("day", "day", { unique: false });
objectStore.createIndex("month", "month", { unique: false });
objectStore.createIndex("year", "year", { unique: false });

objectStore.createIndex("notified", "notified", { unique: false });

note.innerHTML += '<li>Object store created.</li>';
*/
// open a read/write db transaction, ready for adding the data
/*let transaction = DBOpenRequest.transaction(["toDoList"], "readwrite");

transaction.oncomplete = function () {
    alert("Transaction completed: database modification finished");
};

transaction.onerror = function () {
    alert("Transaction not opened due to error");
};*/

// call an object store that's already been added to the database
//let
 //   objectStore = transaction.objectStore("toDoList");

/*console.log(objectStore.indexNames);
console.log(objectStore.keyPath);
console.log(objectStore.name);
console.log(objectStore.transaction);
console.log(objectStore.autoIncrement);*/

// Make a request to add our newItem object to the object store

////let objectStoreRequestUpdate = objectStore.add(newItem[0]);
//objectStoreRequestUpdate.onsuccess = function (event) {
     
  //  alert("Update successful");

//};
//TODO:Add hooks for going offline and coming back online!


//TODO:Add node.js ??

/*var assests = '';
function assetRender() {
    var assets = '';
    var assetFolders = ['js', 'css'];
    for (var x = 0; x < assetFolders.length; x++) {
        assests += _getAllFilesFromFolder(assetFolders[x]);
    }

    return assests;
}

var _getAllFilesFromFolder = function (dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function (file) {

        file = dir + '/' + file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};
console.log('Got Files: '+assetRender());*/


navigator.serviceWorker.register('sw.js');