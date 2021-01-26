//TODO:Add local storage for form here!
//TODO:Add hooks for going offline and coming back online!



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