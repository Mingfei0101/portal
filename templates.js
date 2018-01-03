!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["tmpl-animal-popup"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i,o=null!=n?n:a.nullContext||{},s=l.helperMissing,d="function",r=a.escapeExpression;return'<form id="submit_animal" onsubmit = "form_submit(\'submit_animal\'); return false;">\n\n        <div class="form-group" style="display:none">\n          <label class="control-label" for="url">URL</label>\n          <input type="text" class="form-control" name="url" id="url" value="'+r((i=null!=(i=l.url||(null!=n?n.url:n))?i:s,typeof i===d?i.call(o,{name:"url",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group" style="display:none">\n          <label class="control-label" for="tag">Tag</label>\n          <input type="text" class="form-control" name="tag" id="tag" value="'+r((i=null!=(i=l.tag||(null!=n?n.tag:n))?i:s,typeof i===d?i.call(o,{name:"tag",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="name">Name</label>\n          <input type="text" class="form-control" name="name" id="name" value="'+r((i=null!=(i=l.name||(null!=n?n.name:n))?i:s,typeof i===d?i.call(o,{name:"name",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="description">Description</label>\n          <input type="text" class="form-control" name="description" id="description" value="'+r((i=null!=(i=l.description||(null!=n?n.description:n))?i:s,typeof i===d?i.call(o,{name:"description",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="start_timestamp">Start Timestamp</label>\n          <input type="text" class="form-control" name="start_timestamp" id="start_timestamp" value="'+r((i=null!=(i=l.start_timestamp||(null!=n?n.start_timestamp:n))?i:s,typeof i===d?i.call(o,{name:"start_timestamp",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="end_timestamp">End Timestamp</label>\n          <input type="text" class="form-control" name="end_timestamp" id="end_timestamp" value="'+r((i=null!=(i=l.end_timestamp||(null!=n?n.end_timestamp:n))?i:s,typeof i===d?i.call(o,{name:"end_timestamp",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="field_data">Field Data</label>\n          <input type="text" class="form-control" name="field_data" id="field_data" value="'+r((i=null!=(i=l.field_data||(null!=n?n.field_data:n))?i:s,typeof i===d?i.call(o,{name:"field_data",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <div class="sumbit">\n            <button class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\n          </div>\n        </div>\n</form>\n'},useData:!0}),n["tmpl-desc"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){return"<h2>Electronic Transponder Analysis Gateway</h2>\n            <p>The Electronic Transponder Analysis Gateway (ETAG) is a database and software system that will provide professional\n            data management and versatile data dissemination to a growing community of researchers who use Radio Frequency Identification (RFID)\n            technology to advance biological inquiries in fields like animal behavior, ecological physiology, and community ecology. RFID entails\n            short-range wireless communication between small transponder tags and readers, and it can facilitate tracking of individual items or\n            animals that are equipped with a tag. RFID is a mature and ubiquitous technology, familiar to people in the form of electronic tool-booths\n            or as 'microchip' tags implanted in cats and dogs. A community of researchers has emerged that employs RFID to track individual birds, mammals,\n            fish, reptiles, and even insects in a wide range of field and laboratory research endeavors. For the majority of these projects, data collection,\n            analysis, and curation are currently done by hand, which requires individual investigators to spend considerable time on data management rather\n            than science. ETAG will transform the practices of its user community, by creating an infrastructure based on open-source tools that will\n            allow scientist to collect, validate, visualize, analyze, and share data in near real-time. As a result, researchers will have new capacities\n            both for producing novel science and for sharing their work with their peers and the general public.</p>\n"},useData:!0}),n["tmpl-file-form"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i,o=null!=n?n:a.nullContext||{},s=l.helperMissing,d=a.escapeExpression;return'<form id="submit_file" action="/api/etag/file-upload/" method="POST"  enctype="multipart/form-data">\n      <div style="display:none">\n          <input type="hidden" name="csrfmiddlewaretoken" value="'+d((i=null!=(i=l.csrftoken||(null!=n?n.csrftoken:n))?i:s,"function"==typeof i?i.call(o,{name:"csrftoken",hash:{},data:e}):i))+'"/>\n      </div>\n      <div class="form-group">\n          <label class="control-label" for="reader_id">Reader ID</label>\n          <input type="text" class="form-control" name="reader_id" id="tag_id" value="'+d((i=null!=(i=l.reader_id||(null!=n?n.reader_id:n))?i:s,"function"==typeof i?i.call(o,{name:"reader_id",hash:{},data:e}):i))+'">\n      </div>\n      <div class="form-group">\n          <label class="control-label" for="file">File Upload</label>\n\t  <input type="file" name="upload_file" id="upload_file">\n      </div>\n      <div class="form-group">\n          <div class="sumbit1">\n            <button id="submit_file_button" >Submit</button>\n          </div>\n      </div>\n</form>\n<progress class="progress-bar progress-bar-success"/>\n<div id="upload_result"></div>\n'},useData:!0}),n["tmpl-file-table"]=a({1:function(a,n,l,t,e){var i=a.lambda,o=a.escapeExpression;return"      <tr>\n        <td>"+o(i(null!=n?n.name:n,n))+"</td>\n        <td>"+o(i(null!=n?n.description:n,n))+"</td>\n        <td>"+o(i(null!=n?n.start_timestamp:n,n))+"</td>\n        <td>"+o(i(null!=n?n.end_timestamp:n,n))+'</td>\n        <td><button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modal3" onclick = "tag_animal_change(\''+o(i(null!=n?n.url:n,n))+'\'); return false;" id="#myModal3">Edit</button></td>\n      </tr>\n'},compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i;return'<div id = "file-container">\n  <table id="grid-basic" name="myTable" class="table table-bordered table-striped">\n    <thead>\n      <tr>\n        <th data-column-id="name">Name</th>\n        <th data-column-id="description">Description</th>\n        <th data-column-id="start_time">Start Timestamp</th>\n        <th data-column-id="end_time">End Timestamp</th>\n        <th data-column-id="longitude">Edit <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#modal_add2" onclick = "tag_animal_add(); return false;" id="#myModal_add2">+</button></th>\n      </tr>\n    </thead>\n    <tbody id ="animalRow">\n'+(null!=(i=l.each.call(null!=n?n:a.nullContext||{},null!=n?n.results:n,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?i:"")+'    </tbody>\n  </table>\n\n\n  <div class="modal fade" id="modal3" tabindex="-1" role="dialog">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n          <h4 class="modal-title">Edit Animal</h4>\n        </div>\n        <div class="modal-body">\n          <div id="modal-tag-animal"></div>\n        </div>\n      </div>\x3c!-- /.modal-content --\x3e\n    </div>\x3c!-- /.modal-dialog --\x3e\n  </div>\x3c!-- /.modal --\x3e\n\n  <div class="modal fade" id="modal_add2" tabindex="-1" role="dialog">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n          <h4 class="modal-title">Add Animal</h4>\n        </div>\n        <div class="modal-body">\n          <div id="modal-animal"></div>\n        </div>\n      </div>\x3c!-- /.modal-content --\x3e\n    </div>\x3c!-- /.modal-dialog --\x3e\n  </div>\x3c!-- /.modal --\x3e\n\n</div>'},useData:!0}),n["tmpl-file"]=a({1:function(a,n,l,t,e){return"            <option>"+a.escapeExpression(a.lambda(null!=n?n.reader_id:n,n))+"</option>\n"},compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i;return'<div> \x3c!--beginning div--\x3e\n  <div class = "file-container"> \x3c!--file container div--\x3e\n    <div class = "dropdown-reader"> \x3c!--dropdown div--\x3e\n      <select class="form-control" id="file-container" size = "10">\n'+(null!=(i=l.each.call(null!=n?n:a.nullContext||{},null!=n?n.readers:n,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?i:"")+'      </select>\n    </div> \x3c!--end of dropdown div--\x3e\n\n    <div id="file-form" class="form-container"> \x3c!--form div--\x3e\n    </div> \x3c!--end of form div--\x3e\n   \x3c!-- <div id="file-table" class = "table-container">\n    </div>  --\x3e\n  </div> \x3c!--end of container div--\x3e\n</div> \x3c!--ending div--\x3e\n'},useData:!0}),n["tmpl-history-table"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){return'<div class="col-lg-8"><h2>Task History</h2>\n<h4 id="task_count"></h4>\n<table class="table table-striped table-bordered table-condensed table-hover" id=\'resulttable\'>\n  <tr>\n      <th>Task Name</th>\n      <th>Timestamp</th>\n      <th>Metadata Tags</th>\n      \x3c!--<th>Result</th>--\x3e\n  </tr>\n<tbody id=\'result_tbody\'>\n  </tbody>\n</table>\n<nav>\n<ul class="pager">\n    <li id="li_prevlink" class="disabled"><a id="prevlink" href="#"><span aria-hidden="true">&larr;</span> Previous</a></li>\n    <li id="li_nextlink" ><a id="nextlink" href="#">Next <span aria-hidden="true">&rarr;</span></a></li>\n</ul>\n</nav>\n</div>\n'},useData:!0}),n["tmpl-leftnav"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){return'<div class=" navbar  navbar-fixed-left">\n  <ul class="nav navbar-nav">\n   <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Edit Data <span class="caret"></span></a>\n     <ul class="dropdown-menu" role="menu">\n      <li><a id="editReaders" href="#">Readers</a></li>\n      <li><a id="editTags" href="#">Tags</a></li>\n     </ul>\n   </li>\n   <li class="divider"></li>\n   <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Ingest Data<span class="caret"></span></a>\n     <ul class="dropdown-menu" role="menu">\n      <li><a id="ingestData" href="#">Upload Data</a></li>\n      <li><a id="ingestHistory" href="#">History</a></li>\n     </ul>\n   </li>\n   <li class="divider"></li>\n   <li><a id="user-profile" href="#">User Profile</a></li>\n  </ul>\n</div>\n<div class="col-lg-8">\n <div id="data-container" class="col-md-08">\n   <h3>Select Item from Menu</h3>\n </div>\n</div>\n'},useData:!0}),n["tmpl-location-popup"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i,o=null!=n?n:a.nullContext||{},s=l.helperMissing,d="function",r=a.escapeExpression;return'<form id="submit_location" onsubmit = "form_submit(\'submit_location\'); return false;">\n\n        <div class="form-group" style="display:none">\n          <label class="control-label" for="url">URL</label>\n          <input type="text" class="form-control" name="url" id="url" value="'+r((i=null!=(i=l.url||(null!=n?n.url:n))?i:s,typeof i===d?i.call(o,{name:"url",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group" style="display:none">\n          <label class="control-label" for="reader">Reader</label>\n          <input type="text" class="form-control" name="reader" id="reader" value="'+r((i=null!=(i=l.reader||(null!=n?n.reader:n))?i:s,typeof i===d?i.call(o,{name:"reader",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="start_timestamp">Start Timestamp</label>\n          <input type="text" class="form-control" name="start_timestamp" id="start_timestamp" value="'+r((i=null!=(i=l.start_timestamp||(null!=n?n.start_timestamp:n))?i:s,typeof i===d?i.call(o,{name:"start_timestamp",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="end_timestamp">End Timestamp</label>\n          <input type="text" class="form-control" name="end_timestamp" id="end_timestamp" value="'+r((i=null!=(i=l.end_timestamp||(null!=n?n.end_timestamp:n))?i:s,typeof i===d?i.call(o,{name:"end_timestamp",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="longitude">Longitude</label>\n          <input type="number" class="form-control" name="longitude" id="longitude" value='+r((i=null!=(i=l.longitude||(null!=n?n.longitude:n))?i:s,typeof i===d?i.call(o,{name:"longitude",hash:{},data:e}):i))+'>\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="latitude">Latitude</label>\n          <input type="number" class="form-control" name="latitude" id="latitude" value='+r((i=null!=(i=l.latitude||(null!=n?n.latitude:n))?i:s,typeof i===d?i.call(o,{name:"latitude",hash:{},data:e}):i))+'>\n        </div>\n\n        <div class="checkbox">\n        <label class="control-label" for="active">\n          <input type="checkbox" name="active" id="active" value='+r((i=null!=(i=l.active||(null!=n?n.active:n))?i:s,typeof i===d?i.call(o,{name:"active",hash:{},data:e}):i))+' checked> Active\n        </label>\n      </div>\n\n        <div class="form-group">\n          <div class="sumbit">\n            <button class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\n          </div>\n        </div>\n</form>\n'},useData:!0}),n["tmpl-new-animal-popup"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i,o=null!=n?n:a.nullContext||{},s=l.helperMissing,d="function",r=a.escapeExpression;return'<form id="submit_animal" onsubmit = "form_submit_insert1(\'submit_animal\'); return false;">\n\n        <div class="form-group" style="display:none">\n          <label class="control-label" for="url">URL</label>\n          <input type="text" class="form-control" name="url" id="url" value="'+r((i=null!=(i=l.url||(null!=n?n.url:n))?i:s,typeof i===d?i.call(o,{name:"url",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="tag">Tag</label>\n          <input type="text" class="form-control" name="tag" id="tag" value="'+r((i=null!=(i=l.tag||(null!=n?n.tag:n))?i:s,typeof i===d?i.call(o,{name:"tag",hash:{},data:e}):i))+'" readonly>\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="name">Name</label>\n          <input type="text" class="form-control" name="name" id="name" value="'+r((i=null!=(i=l.name||(null!=n?n.name:n))?i:s,typeof i===d?i.call(o,{name:"name",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="description">Description</label>\n          <input type="text" class="form-control" name="description" id="description" value="'+r((i=null!=(i=l.description||(null!=n?n.description:n))?i:s,typeof i===d?i.call(o,{name:"description",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="start_timestamp">Start Timestamp</label>\n          <input type="text" class="form-control" name="start_timestamp" id="start_timestamp" value="'+r((i=null!=(i=l.start_timestamp||(null!=n?n.start_timestamp:n))?i:s,typeof i===d?i.call(o,{name:"start_timestamp",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="end_timestamp">End Timestamp</label>\n          <input type="text" class="form-control" name="end_timestamp" id="end_timestamp" value="'+r((i=null!=(i=l.end_timestamp||(null!=n?n.end_timestamp:n))?i:s,typeof i===d?i.call(o,{name:"end_timestamp",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="field_data">Field Data</label>\n          <input type="text" class="form-control" name="field_data" id="field_data" value="'+r((i=null!=(i=l.field_data||(null!=n?n.field_data:n))?i:s,typeof i===d?i.call(o,{name:"field_data",hash:{},data:e}):i))+'">\n            \n                <label for="field_data">Note:Field Data should be in json format. <a  target="_blank" href="https://www.w3schools.com/js/js_json_syntax.asp">Json Syntax</a> </label>  \n        </div>\n\n        <div class="form-group">\n          <div class="sumbit">\n            <button class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\n          </div>\n        </div>\n</form>\n'},useData:!0}),n["tmpl-new-location-popup"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i,o=null!=n?n:a.nullContext||{},s=l.helperMissing,d="function",r=a.escapeExpression;return'<form id="submit_location" onsubmit = "form_submit_insert(\'submit_location\'); return false;">\n\n        <div class="form-group" style="display:none">\n          <label class="control-label" for="url">URL</label>\n          <input type="text" class="form-control" name="url" id="url" value="'+r((i=null!=(i=l.url||(null!=n?n.url:n))?i:s,typeof i===d?i.call(o,{name:"url",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="reader">Reader</label>\n          <input type="text" class="form-control" name="reader" id="reader" value="'+r((i=null!=(i=l.reader||(null!=n?n.reader:n))?i:s,typeof i===d?i.call(o,{name:"reader",hash:{},data:e}):i))+'" readonly>\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="start_timestamp">Start Timestamp</label>\n          <input type="text" class="form-control" name="start_timestamp" id="start_timestamp" value="'+r((i=null!=(i=l.start_timestamp||(null!=n?n.start_timestamp:n))?i:s,typeof i===d?i.call(o,{name:"start_timestamp",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="end_timestamp">End Timestamp</label>\n          <input type="text" class="form-control" name="end_timestamp" id="end_timestamp" value="'+r((i=null!=(i=l.end_timestamp||(null!=n?n.end_timestamp:n))?i:s,typeof i===d?i.call(o,{name:"end_timestamp",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="longitude">Longitude</label>\n          <input type="number" class="form-control" name="longitude" id="longitude" value='+r((i=null!=(i=l.longitude||(null!=n?n.longitude:n))?i:s,typeof i===d?i.call(o,{name:"longitude",hash:{},data:e}):i))+'>\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="latitude">Latitude</label>\n          <input type="number" class="form-control" name="latitude" id="latitude" value='+r((i=null!=(i=l.latitude||(null!=n?n.latitude:n))?i:s,typeof i===d?i.call(o,{name:"latitude",hash:{},data:e}):i))+'>\n        </div>\n\n        <div class="checkbox">\n        <label class="control-label" for="active">\n          <input type="checkbox" name="active" id="active" value='+r((i=null!=(i=l.active||(null!=n?n.active:n))?i:s,typeof i===d?i.call(o,{name:"active",hash:{},data:e}):i))+' checked> Active\n        </label>\n      </div>\n\n        <div class="form-group">\n          <div class="sumbit">\n            <button class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\n          </div>\n        </div>\n</form>\n'},useData:!0}),n["tmpl-readers-form"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i,o=null!=n?n:a.nullContext||{},s=l.helperMissing,d="function",r=a.escapeExpression;return'<form id="submitForm" onclick = "form_submit(\'submitForm\'); return false;">\n\n        <div class="form-group" style="display:none">\n          <label class="control-label" for="url">URL</label>\n          <input type="text" class="form-control" name="url" id="url" value="'+r((i=null!=(i=l.url||(null!=n?n.url:n))?i:s,typeof i===d?i.call(o,{name:"url",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="reader_id">Reader ID</label>\n          <input type="text" class="form-control" name="reader_id" id="reader_id" value="'+r((i=null!=(i=l.reader_id||(null!=n?n.reader_id:n))?i:s,typeof i===d?i.call(o,{name:"reader_id",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="name">Name</label>\n          <input type="text" class="form-control" name="name" id="name" value="'+r((i=null!=(i=l.name||(null!=n?n.name:n))?i:s,typeof i===d?i.call(o,{name:"name",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="description">Description</label>\n          <input type="text" class="form-control" name="description" id="description" value="'+r((i=null!=(i=l.description||(null!=n?n.description:n))?i:s,typeof i===d?i.call(o,{name:"description",hash:{},data:e}):i))+'">\n        </div>\n\n        \x3c!--<div class="form-group" style="display:none">\n          <label class="control-label" for="user_id">User ID</label>\n          <input type="text" class="form-control" name="user_id" id="user_id" value="'+r((i=null!=(i=l.user_id||(null!=n?n.user_id:n))?i:s,typeof i===d?i.call(o,{name:"user_id",hash:{},data:e}):i))+'">\n        </div>--\x3e\n\n        <div class="form-group">\n          <div class="sumbit">\n            <button class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\n          </div>\n        </div>\n</form>\n'},useData:!0}),n["tmpl-readers-table"]=a({1:function(a,n,l,t,e){var i=a.lambda,o=a.escapeExpression;return"      <tr>\n        <td>"+o(i(null!=n?n.start_timestamp:n,n))+"</td>\n        <td>"+o(i(null!=n?n.end_timestamp:n,n))+"</td>\n        <td>"+o(i(null!=n?n.latitude:n,n))+"</td>\n        <td>"+o(i(null!=n?n.longitude:n,n))+'</td>\n        <td><button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modal2" onclick = "lat_long_change(\''+o(i(null!=n?n.url:n,n))+'\'); return false;" id="#myModal2">Edit</button></td>\n      </tr>\n'},compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i;return'<div id = "grid-container">\n  <table id="grid-basic" name="myTable" class="table table-bordered table-striped">\n    <thead>\n      <tr>\n        <th data-column-id="start_time">Start Timestamp</th>\n        <th data-column-id="end_time">End Timestamp</th>\n        <th data-column-id="latitude">Latitude</th>\n        <th data-column-id="longitude">Longitude</th>\n        <th data-column-id="longitude">Edit <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#modal_add" onclick = "reader_add(); return false;" id="#myModal3">+</button></th>\n      </tr>\n    </thead>\n    <tbody id ="locationRow">\n'+(null!=(i=l.each.call(null!=n?n:a.nullContext||{},null!=n?n.results:n,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?i:"")+'    </tbody>\n  </table>\n\n\n  <div class="modal fade" id="modal2" tabindex="-1" role="dialog">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n          <h4 class="modal-title">Edit Longitude/Latitude</h4>\n        </div>\n        <div class="modal-body">\n          <div id="modal-lat-long"></div>\n        </div>\n      </div>\x3c!-- /.modal-content --\x3e\n    </div>\x3c!-- /.modal-dialog --\x3e\n  </div>\x3c!-- /.modal --\x3e\n\n  <div class="modal fade" id="modal_add" tabindex="-1" role="dialog">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n          <h4 class="modal-title">Add Longitude/Latitude</h4>\n        </div>\n        <div class="modal-body">\n          <div id="modal-location"></div>\n        </div>\n      </div>\x3c!-- /.modal-content --\x3e\n    </div>\x3c!-- /.modal-dialog --\x3e\n  </div>\x3c!-- /.modal --\x3e\n\n</div>\n'},useData:!0}),n["tmpl-readers"]=a({1:function(a,n,l,t,e){return"            <option>"+a.escapeExpression(a.lambda(null!=n?n.reader_id:n,n))+"</option>\n"},compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i;return'<div> \x3c!--beginning div--\x3e\n  <div class = "tab-container"> \x3c!--tab container div--\x3e\n    <div class = "dropdown-reader"> \x3c!--dropdown div--\x3e\n      <select class="form-control" id="readers-container" size = "10">\n'+(null!=(i=l.each.call(null!=n?n:a.nullContext||{},null!=n?n.readers:n,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?i:"")+'      </select>\n    </div> \x3c!--end of dropdown div--\x3e\n\n    <div id="readers-form" class="form-container"> \x3c!--form div--\x3e\n    </div> \x3c!--end of form div--\x3e\n    <div id="readers-table" class = "table-container"> \x3c!--table div--\x3e\n    </div> \x3c!--end of table div--\x3e\n  </div> \x3c!--end of container div--\x3e\n</div> \x3c!--ending div--\x3e\n'},useData:!0}),n["tmpl-tags-form"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i,o=null!=n?n:a.nullContext||{},s=l.helperMissing,d=a.escapeExpression;return'<form id="submit_tags" onclick = "form_submit(\'submit_tags\'); return false;">\n\n        <div class="form-group" style="display:none">\n          <label class="control-label" for="url">URL</label>\n          <input type="text" class="form-control" name="url" id="url" value="'+d((i=null!=(i=l.url||(null!=n?n.url:n))?i:s,"function"==typeof i?i.call(o,{name:"url",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="reader_id">Tag ID</label>\n          <input type="text" class="form-control" name="tag_id" id="tag_id" value="'+d((i=null!=(i=l.tag_id||(null!=n?n.tag_id:n))?i:s,"function"==typeof i?i.call(o,{name:"tag_id",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="name">Name</label>\n          <input type="text" class="form-control" name="name" id="name" value="'+d((i=null!=(i=l.name||(null!=n?n.name:n))?i:s,"function"==typeof i?i.call(o,{name:"name",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <label class="control-label" for="description">Description</label>\n          <input type="text" class="form-control" name="description" id="description" value="'+d((i=null!=(i=l.description||(null!=n?n.description:n))?i:s,"function"==typeof i?i.call(o,{name:"description",hash:{},data:e}):i))+'">\n        </div>\n\n        <div class="form-group">\n          <div class="sumbit">\n            <button class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\n          </div>\n        </div>\n</form>\n'},useData:!0}),n["tmpl-tags-table"]=a({1:function(a,n,l,t,e){var i=a.lambda,o=a.escapeExpression;return"      <tr>\n        <td>"+o(i(null!=n?n.name:n,n))+"</td>\n        <td>"+o(i(null!=n?n.description:n,n))+"</td>\n        <td>"+o(i(null!=n?n.start_timestamp:n,n))+"</td>\n        <td>"+o(i(null!=n?n.end_timestamp:n,n))+'</td>\n        <td><button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modal3" onclick = "tag_animal_change(\''+o(i(null!=n?n.url:n,n))+'\'); return false;" id="#myModal3">Edit</button></td>\n      </tr>\n'},compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i;return'<div id = "tag-container">\n  <table id="grid-basic" name="myTable" class="table table-bordered table-striped">\n    <thead>\n      <tr>\n        <th data-column-id="name">Name</th>\n        <th data-column-id="description">Description</th>\n        <th data-column-id="start_time">Start Timestamp</th>\n        <th data-column-id="end_time">End Timestamp</th>\n        <th data-column-id="longitude">Edit <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#modal_add2" onclick = "tag_animal_add(); return false;" id="#myModal_add2">+</button></th>\n      </tr>\n    </thead>\n    <tbody id ="animalRow">\n'+(null!=(i=l.each.call(null!=n?n:a.nullContext||{},null!=n?n.results:n,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?i:"")+'    </tbody>\n  </table>\n\n\n  <div class="modal fade" id="modal3" tabindex="-1" role="dialog">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n          <h4 class="modal-title">Edit Animal</h4>\n        </div>\n        <div class="modal-body">\n          <div id="modal-tag-animal"></div>\n        </div>\n      </div>\x3c!-- /.modal-content --\x3e\n    </div>\x3c!-- /.modal-dialog --\x3e\n  </div>\x3c!-- /.modal --\x3e\n\n  <div class="modal fade" id="modal_add2" tabindex="-1" role="dialog">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n          <h4 class="modal-title">Add Animal</h4>\n        </div>\n        <div class="modal-body">\n          <div id="modal-animal"></div>\n        </div>\n      </div>\x3c!-- /.modal-content --\x3e\n    </div>\x3c!-- /.modal-dialog --\x3e\n  </div>\x3c!-- /.modal --\x3e\n\n</div>\n'},useData:!0}),n["tmpl-tags"]=a({1:function(a,n,l,t,e){return"            <option>"+a.escapeExpression(a.lambda(null!=n?n.tag_id:n,n))+"</option>\n"},compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i;return'<div> \x3c!--beginning div--\x3e\n  <div class = "tab-container"> \x3c!--tab container div--\x3e\n    <div class = "dropdown-reader"> \x3c!--dropdown div--\x3e\n      <select class="form-control" id="tags-container" size = "10">\n'+(null!=(i=l.each.call(null!=n?n:a.nullContext||{},null!=n?n.readers:n,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?i:"")+'      </select>\n    </div> \x3c!--end of dropdown div--\x3e\n\n    <div id="tags-form" class="form-container"> \x3c!--form div--\x3e\n    </div> \x3c!--end of form div--\x3e\n    <div id="tags-table" class = "table-container">\n    </div>\n  </div> \x3c!--end of container div--\x3e\n</div> \x3c!--ending div--\x3e\n'},useData:!0}),n["tmpl-tr"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,t,e){var i,o=null!=n?n:a.nullContext||{},s=l.helperMissing,d=a.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+d((i=null!=(i=l.result||(null!=n?n.result:n))?i:s,"function"==typeof i?i.call(o,{name:"result",hash:{},data:e}):i))+"');return false;\" >"+d((i=null!=(i=l.task_name||(null!=n?n.task_name:n))?i:s,"function"==typeof i?i.call(o,{name:"task_name",hash:{},data:e}):i))+"</a></td><td>"+d((i=null!=(i=l.timestamp||(null!=n?n.timestamp:n))?i:s,"function"==typeof i?i.call(o,{name:"timestamp",hash:{},data:e}):i))+"</td><td>"+d((l.json_metatags||n&&n.json_metatags||s).call(o,null!=n?n.tags:n,{name:"json_metatags",hash:{},data:e}))+"</td></tr>\n"},useData:!0}),n["tmpl-user"]=a({compiler:[7,">= 4.0.0"],
main:function(a,n,l,t,e){var i,o=null!=n?n:a.nullContext||{},s=l.helperMissing,d="function",r=a.escapeExpression;return'      <h2>User Profile</h2>\n      <div id="user_profile">\n          <div id="photo" class="col-md-2" style="width:200px ">\n            <img src="'+r((i=null!=(i=l.gravator_url||(null!=n?n.gravator_url:n))?i:s,typeof i===d?i.call(o,{name:"gravator_url",hash:{},data:e}):i))+'?s=180&d=mm"><br><br>\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\n            <a id="reset_password" style="clear:both;">Reset Password</a>\n          </div>\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\n              <div class="form-group">\n                <label class="col-md-3 control-label">Username</label>\n                  <div class="col-md-09">\n                <p class="form-control-static">'+r((i=null!=(i=l.username||(null!=n?n.username:n))?i:s,typeof i===d?i.call(o,{name:"username",hash:{},data:e}):i))+'</p>\n                </div>\n            </div>\n             <div class="form-group">\n                  <label class="col-md-3 control-label">Name</label>\n                    <div class="col-md-09">\n                  <p class="form-control-static">'+r((i=null!=(i=l.name||(null!=n?n.name:n))?i:s,typeof i===d?i.call(o,{name:"name",hash:{},data:e}):i))+'</p>\n                  </div>\n            </div>\n              <div class="form-group">\n                <label class="col-md-3 control-label">Email</label>\n                  <div class="col-md-09">\n                    <p class="form-control-static">'+r((i=null!=(i=l.email||(null!=n?n.email:n))?i:s,typeof i===d?i.call(o,{name:"email",hash:{},data:e}):i))+'</p>\n                 </div>\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\n         </form>\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\n              <div style="display:none">\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+r((i=null!=(i=l.csrftoken||(null!=n?n.csrftoken:n))?i:s,typeof i===d?i.call(o,{name:"csrftoken",hash:{},data:e}):i))+'"/>\n             </div>\n              <div class="form-group">\n                 <label for="first_name">First Name</label>\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+r((i=null!=(i=l.first_name||(null!=n?n.first_name:n))?i:s,typeof i===d?i.call(o,{name:"first_name",hash:{},data:e}):i))+'">\n             </div>\n              <div class="form-group">\n                   <label for="last_name">Last Name</label>\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+r((i=null!=(i=l.last_name||(null!=n?n.last_name:n))?i:s,typeof i===d?i.call(o,{name:"last_name",hash:{},data:e}):i))+'">\n               </div>\n              <div class="form-group">\n                 <label for="email">Email address</label>\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+r((i=null!=(i=l.email||(null!=n?n.email:n))?i:s,typeof i===d?i.call(o,{name:"email",hash:{},data:e}):i))+'">\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right">Update</button>\n         </form>\n         <div class="row" style="width:100%;clear:both;"></div>\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\n            <div style="display:none">\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+r((i=null!=(i=l.csrftoken||(null!=n?n.csrftoken:n))?i:s,typeof i===d?i.call(o,{name:"csrftoken",hash:{},data:e}):i))+'"/>\n           </div>\n            <div class="form-group">\n             <label for="password">New Password</label>\n              <input type="password" class="form-control" name="password" placeholder="New Password">\n           </div>\n            <div class="form-group">\n             <label for="password2">Retype New Password</label>\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\n           </div>\n           <button type="submit" class="btn btn-default">Set Password</button>\n         </form>\n\n     </div>\n'},useData:!0})}();
