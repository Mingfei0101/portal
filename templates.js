!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["tmpl-location-popup"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,r,e){var t,s=null!=n?n:{},o=l.helperMissing,i="function",d=a.escapeExpression;return'<form id="submitForm" onclick = "form_submit(\'submitForm\'); return false;">\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="name">Longitude</label>\r\n          <input type="text" class="form-control" name="longitude" id="longitude" value="'+d((t=null!=(t=l.longitude||(null!=n?n.longitude:n))?t:o,typeof t===i?t.call(s,{name:"longitude",hash:{},data:e}):t))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="reader_id">Latitude</label>\r\n          <input type="text" class="form-control" name="latitude" id="latitude" value="'+d((t=null!=(t=l.latitude||(null!=n?n.latitude:n))?t:o,typeof t===i?t.call(s,{name:"latitude",hash:{},data:e}):t))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <div class="sumbit">\r\n            <button class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\r\n          </div>\r\n        </div>\r\n</form>\r\n'},useData:!0}),n["tmpl-readers-form"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,r,e){var t,s=null!=n?n:{},o=l.helperMissing,i="function",d=a.escapeExpression;return'<form id="submitForm" onclick = "form_submit(\'submitForm\'); return false;">\r\n\r\n        <div class="form-group" style="display:none">\r\n          <label class="control-label" for="url">URL</label>\r\n          <input type="text" class="form-control" name="url" id="url" value="'+d((t=null!=(t=l.url||(null!=n?n.url:n))?t:o,typeof t===i?t.call(s,{name:"url",hash:{},data:e}):t))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="reader_id">Reader ID</label>\r\n          <input type="text" class="form-control" name="reader_id" id="reader_id" value="'+d((t=null!=(t=l.reader_id||(null!=n?n.reader_id:n))?t:o,typeof t===i?t.call(s,{name:"reader_id",hash:{},data:e}):t))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="name">Name</label>\r\n          <input type="text" class="form-control" name="name" id="name" value="'+d((t=null!=(t=l.name||(null!=n?n.name:n))?t:o,typeof t===i?t.call(s,{name:"name",hash:{},data:e}):t))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="description">Description</label>\r\n          <input type="text" class="form-control" name="description" id="description" value="'+d((t=null!=(t=l.description||(null!=n?n.description:n))?t:o,typeof t===i?t.call(s,{name:"description",hash:{},data:e}):t))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="user_id">User ID</label>\r\n          <input type="text" class="form-control" name="user_id" id="user_id" value="'+d((t=null!=(t=l.user_id||(null!=n?n.user_id:n))?t:o,typeof t===i?t.call(s,{name:"user_id",hash:{},data:e}):t))+'">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <div class="sumbit">\r\n            <button class="btn btn-primary" id="submitButton" value="PUT">Submit</button>\r\n          </div>\r\n        </div>\r\n</form>\r\n'},useData:!0}),n["tmpl-readers"]=a({1:function(a,n,l,r,e){return"            <option>"+a.escapeExpression(a.lambda(null!=n?n.reader_id:n,n))+"</option>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,n,l,r,e){var t;return'<div> <!--beginning div-->\r\n  <div class = "tab-container"> <!--tab container div-->\r\n    <div class = "dropdown-reader"> <!--dropdown div-->\r\n      <select class="btn btn-default dropdown-toggle" type="button" id="readers-container" size = "10" data-toggle="dropdown" aria-expanded="true" aria-haspopup="true">\r\n'+(null!=(t=l.each.call(null!=n?n:{},null!=n?n.readers:n,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?t:"")+'      </select>\r\n    </div> <!--end of dropdown div-->\r\n\r\n    <div id="readers-form" class="form-container"> <!--form div-->\r\n    </div> <!--end of form div-->\r\n    <div id="tags-table" class = "table-container"> <!--table div-->\r\n    </div> <!--end of table div-->\r\n  </div> <!--end of container div-->\r\n</div> <!--ending div-->\r\n'},useData:!0}),n["tmpl-tags-table"]=a({1:function(a,n,l,r,e){var t=a.lambda,s=a.escapeExpression;return"      <tr>\r\n        <td>"+s(t(null!=n?n.start_timestamp:n,n))+"</td>\r\n        <td>"+s(t(null!=n?n.end_timestamp:n,n))+"</td>\r\n        <td>"+s(t(null!=n?n.latitude:n,n))+"</td>\r\n        <td>"+s(t(null!=n?n.longitude:n,n))+'</td>\r\n        <td><button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modal2" onclick = "lat_long_change('+s(t(n,n))+')" id="#myModal2">Edit</button></td>\r\n      </tr>\r\n'},compiler:[7,">= 4.0.0"],main:function(a,n,l,r,e){var t;return'<div id = "grid-container">\r\n  <table id="grid-basic" name="myTable" class="table table-bordered table-striped">\r\n    <thead>\r\n      <tr>\r\n        <th data-column-id="start_time">Start Timestamp</th>\r\n        <th data-column-id="end_time">End Timestamp</th>\r\n        <th data-column-id="latitude">Latitude</th>\r\n        <th data-column-id="longitude">Longitude</th>\r\n        <th data-column-id="longitude">Edit</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody id ="locationRow">\r\n'+(null!=(t=l.each.call(null!=n?n:{},null!=n?n.results:n,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?t:"")+'    </tbody>\r\n  </table>\r\n\r\n\r\n  <div class="modal fade" id="modal2" tabindex="-1" role="dialog">\r\n    <div class="modal-dialog">\r\n      <div class="modal-content">\r\n        <div class="modal-header">\r\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n          <h4 class="modal-title">Edit Longitude/Latitude</h4>\r\n        </div>\r\n        <div class="modal-body" id="modal-lat-long">\r\n          <p>Blah</p>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n\r\n</div>\r\n'},useData:!0}),n["tmpl-tr"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,r,e){var t,s=null!=n?n:{},o=l.helperMissing,i="function",d=a.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+d((t=null!=(t=l.result||(null!=n?n.result:n))?t:o,typeof t===i?t.call(s,{name:"result",hash:{},data:e}):t))+"');return false;\" >"+d((t=null!=(t=l.task_name||(null!=n?n.task_name:n))?t:o,typeof t===i?t.call(s,{name:"task_name",hash:{},data:e}):t))+"</a></td><td>"+d((t=null!=(t=l.timestamp||(null!=n?n.timestamp:n))?t:o,typeof t===i?t.call(s,{name:"timestamp",hash:{},data:e}):t))+"</td><td>"+d((l.json_metatags||n&&n.json_metatags||o).call(s,null!=n?n.tags:n,{name:"json_metatags",hash:{},data:e}))+"</td></tr>\r\n"},useData:!0}),n["tmpl-user"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,r,e){var t,s=null!=n?n:{},o=l.helperMissing,i="function",d=a.escapeExpression;return'      <h2>User Profile</h2>\r\n      <div id="user_profile">\r\n          <div id="photo" class="col-md-2" style="width:200px ">\r\n            <img src="'+d((t=null!=(t=l.gravator_url||(null!=n?n.gravator_url:n))?t:o,typeof t===i?t.call(s,{name:"gravator_url",hash:{},data:e}):t))+'?s=180&d=mm"><br><br>\r\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\r\n            <a id="reset_password" style="clear:both;">Reset Password</a>\r\n          </div>\r\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\r\n              <div class="form-group">\r\n                <label class="col-md-3 control-label">Username</label>\r\n                  <div class="col-md-09">\r\n                <p class="form-control-static">'+d((t=null!=(t=l.username||(null!=n?n.username:n))?t:o,typeof t===i?t.call(s,{name:"username",hash:{},data:e}):t))+'</p>\r\n                </div>\r\n            </div>\r\n             <div class="form-group">\r\n                  <label class="col-md-3 control-label">Name</label>\r\n                    <div class="col-md-09">\r\n                  <p class="form-control-static">'+d((t=null!=(t=l.name||(null!=n?n.name:n))?t:o,typeof t===i?t.call(s,{name:"name",hash:{},data:e}):t))+'</p>\r\n                  </div>\r\n            </div>\r\n              <div class="form-group">\r\n                <label class="col-md-3 control-label">Email</label>\r\n                  <div class="col-md-09">\r\n                    <p class="form-control-static">'+d((t=null!=(t=l.email||(null!=n?n.email:n))?t:o,typeof t===i?t.call(s,{name:"email",hash:{},data:e}):t))+'</p>\r\n                 </div>\r\n             </div>\r\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\r\n         </form>\r\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\r\n              <div style="display:none">\r\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+d((t=null!=(t=l.csrftoken||(null!=n?n.csrftoken:n))?t:o,typeof t===i?t.call(s,{name:"csrftoken",hash:{},data:e}):t))+'"/>\r\n             </div>\r\n              <div class="form-group">\r\n                 <label for="first_name">First Name</label>\r\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+d((t=null!=(t=l.first_name||(null!=n?n.first_name:n))?t:o,typeof t===i?t.call(s,{name:"first_name",hash:{},data:e}):t))+'">\r\n             </div>\r\n              <div class="form-group">\r\n                   <label for="last_name">Last Name</label>\r\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+d((t=null!=(t=l.last_name||(null!=n?n.last_name:n))?t:o,typeof t===i?t.call(s,{name:"last_name",hash:{},data:e}):t))+'">\r\n               </div>\r\n              <div class="form-group">\r\n                 <label for="email">Email address</label>\r\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+d((t=null!=(t=l.email||(null!=n?n.email:n))?t:o,typeof t===i?t.call(s,{name:"email",hash:{},data:e}):t))+'">\r\n             </div>\r\n             <button type="submit" id="form_submit" class="btn btn-default pull-right">Update</button>\r\n         </form>\r\n         <div class="row" style="width:100%;clear:both;"></div>\r\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\r\n            <div style="display:none">\r\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+d((t=null!=(t=l.csrftoken||(null!=n?n.csrftoken:n))?t:o,typeof t===i?t.call(s,{name:"csrftoken",hash:{},data:e}):t))+'"/>\r\n           </div>\r\n            <div class="form-group">\r\n             <label for="password">New Password</label>\r\n              <input type="password" class="form-control" name="password" placeholder="New Password">\r\n           </div>\r\n            <div class="form-group">\r\n             <label for="password2">Retype New Password</label>\r\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\r\n           </div>\r\n           <button type="submit" class="btn btn-default">Set Password</button>\r\n         </form>\r\n     </div>\r\n'},useData:!0})}();
