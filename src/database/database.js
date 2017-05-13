var Database =(function () {
	function Database (name) {
		this._db = new Dexie(name);
	}

	Database.prototype.addTable= function(t_name, columns, version = 1){
		//  make sure db is not open
		// this._db.close();
		var t_schema = {}
		t_schema[t_name] = columns.join(',');
		return this._db.version(version).stores(t_schema);
	}

	Database.prototype.getDb = function(){
		return this._db;
	}

	Database.prototype.getTable = function(t_name){
		return this._db.tables.find(function(t){return t.name == t_name});
	}

	return Database;
})();

console.log('Database.js loaded');