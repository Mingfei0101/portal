!function(){var a=Handlebars.template,r=Handlebars.templates=Handlebars.templates||{};r["tmpl-readers"]=a({1:function(a,r,n,l,e){return"            <option>"+a.escapeExpression(a.lambda(r,r))+"</option>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,r,n,l,e){var t,s,o=null!=r?r:{},i=n.helperMissing,d="function",m=a.escapeExpression;return'<div> <!--beginning div-->\r\n  <div class = "tab-container"> <!--tab container div-->\r\n    <div class = "dropdown-reader"> <!--dropdown div-->\r\n      <select class="btn btn-default dropdown-toggle" type="button" id="readers-container" size = "10" data-toggle="dropdown" aria-expanded="true" aria-haspopup="true">\r\n'+(null!=(t=n.each.call(o,null!=r?r.readers:r,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?t:"")+'      </select>\r\n    </div> <!--end of dropdown div-->\r\n\r\n    <div class="form-container"> <!--form div-->\r\n      <form name="myForm" id="submitForm" >\r\n        <div class="form-group">\r\n          <label class="control-label" for="url">URL</label>\r\n          <input type="text" class="form-control" name="url">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="reader_id">Reader ID</label>\r\n          <input type="text" class="form-control" name="reader_id">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="name">Name</label>\r\n          <input type="text" class="form-control" name="name">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="description">Description</label>\r\n          <input type="text" class="form-control" name="description">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="control-label" for="user_id">User ID</label>\r\n          <input type="text" class="form-control" name="user_id">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <div class="sumbit">\r\n            <button type="submit" class="btn btn-primary">Submit</button>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div> <!--end of form div-->\r\n\r\n    <div class = tagTable> <!--table div-->\r\n      <table id="grid-basic" class="table table-bordered table-striped">\r\n        <thead>\r\n          <tr>\r\n            <th data-column-id="tag">Tag</th>\r\n            <th data-column-id="tag-timestamp">Tag Timestamp</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>'+m((s=null!=(s=n.tag||(null!=r?r.tag:r))?s:i,typeof s===d?s.call(o,{name:"tag",hash:{},data:e}):s))+"</td>\r\n            <td>"+m((s=null!=(s=n["tag-timestamp"]||(null!=r?r["tag-timestamp"]:r))?s:i,typeof s===d?s.call(o,{name:"tag-timestamp",hash:{},data:e}):s))+"</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div> <!--end of table div-->\r\n\r\n  </div> <!--end of container div-->\r\n</div> <!--ending div-->\r\n"},useData:!0}),r["tmpl-tags"]=a({compiler:[7,">= 4.0.0"],main:function(a,r,n,l,e){var t;return"<div> "+a.escapeExpression((t=null!=(t=n.text||(null!=r?r.text:r))?t:n.helperMissing,"function"==typeof t?t.call(null!=r?r:{},{name:"text",hash:{},data:e}):t))+" </div>\r\n"},useData:!0}),r["tmpl-tr"]=a({compiler:[7,">= 4.0.0"],main:function(a,r,n,l,e){var t,s=null!=r?r:{},o=n.helperMissing,i="function",d=a.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+d((t=null!=(t=n.result||(null!=r?r.result:r))?t:o,typeof t===i?t.call(s,{name:"result",hash:{},data:e}):t))+"');return false;\" >"+d((t=null!=(t=n.task_name||(null!=r?r.task_name:r))?t:o,typeof t===i?t.call(s,{name:"task_name",hash:{},data:e}):t))+"</a></td><td>"+d((t=null!=(t=n.timestamp||(null!=r?r.timestamp:r))?t:o,typeof t===i?t.call(s,{name:"timestamp",hash:{},data:e}):t))+"</td><td>"+d((n.json_metatags||r&&r.json_metatags||o).call(s,null!=r?r.tags:r,{name:"json_metatags",hash:{},data:e}))+"</td></tr>\r\n"},useData:!0}),r["tmpl-user"]=a({compiler:[7,">= 4.0.0"],main:function(a,r,n,l,e){var t,s=null!=r?r:{},o=n.helperMissing,i="function",d=a.escapeExpression;return'      <h2>User Profile</h2>\r\n      <div id="user_profile">\r\n          <div id="photo" class="col-md-2" style="width:200px ">\r\n            <img src="'+d((t=null!=(t=n.gravator_url||(null!=r?r.gravator_url:r))?t:o,typeof t===i?t.call(s,{name:"gravator_url",hash:{},data:e}):t))+'?s=180&d=mm"><br><br>\r\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\r\n            <a id="reset_password" style="clear:both;">Reset Password</a>\r\n          </div>\r\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\r\n              <div class="form-group">\r\n                <label class="col-md-3 control-label">Username</label>\r\n                  <div class="col-md-09">\r\n                <p class="form-control-static">'+d((t=null!=(t=n.username||(null!=r?r.username:r))?t:o,typeof t===i?t.call(s,{name:"username",hash:{},data:e}):t))+'</p>\r\n                </div>\r\n            </div>\r\n             <div class="form-group">\r\n                  <label class="col-md-3 control-label">Name</label>\r\n                    <div class="col-md-09">\r\n                  <p class="form-control-static">'+d((t=null!=(t=n.name||(null!=r?r.name:r))?t:o,typeof t===i?t.call(s,{name:"name",hash:{},data:e}):t))+'</p>\r\n                  </div>\r\n            </div>\r\n              <div class="form-group">\r\n                <label class="col-md-3 control-label">Email</label>\r\n                  <div class="col-md-09">\r\n                    <p class="form-control-static">'+d((t=null!=(t=n.email||(null!=r?r.email:r))?t:o,typeof t===i?t.call(s,{name:"email",hash:{},data:e}):t))+'</p>\r\n                 </div>\r\n             </div>\r\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\r\n         </form>\r\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\r\n              <div style="display:none">\r\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+d((t=null!=(t=n.csrftoken||(null!=r?r.csrftoken:r))?t:o,typeof t===i?t.call(s,{name:"csrftoken",hash:{},data:e}):t))+'"/>\r\n             </div>\r\n              <div class="form-group">\r\n                 <label for="first_name">First Name</label>\r\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+d((t=null!=(t=n.first_name||(null!=r?r.first_name:r))?t:o,typeof t===i?t.call(s,{name:"first_name",hash:{},data:e}):t))+'">\r\n             </div>\r\n              <div class="form-group">\r\n                   <label for="last_name">Last Name</label>\r\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+d((t=null!=(t=n.last_name||(null!=r?r.last_name:r))?t:o,typeof t===i?t.call(s,{name:"last_name",hash:{},data:e}):t))+'">\r\n               </div>\r\n              <div class="form-group">\r\n                 <label for="email">Email address</label>\r\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+d((t=null!=(t=n.email||(null!=r?r.email:r))?t:o,typeof t===i?t.call(s,{name:"email",hash:{},data:e}):t))+'">\r\n             </div>\r\n             <button type="submit" id="form_submit" class="btn btn-default pull-right">Update</button>\r\n         </form>\r\n         <div class="row" style="width:100%;clear:both;"></div>\r\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\r\n            <div style="display:none">\r\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+d((t=null!=(t=n.csrftoken||(null!=r?r.csrftoken:r))?t:o,typeof t===i?t.call(s,{name:"csrftoken",hash:{},data:e}):t))+'"/>\r\n           </div>\r\n            <div class="form-group">\r\n             <label for="password">New Password</label>\r\n              <input type="password" class="form-control" name="password" placeholder="New Password">\r\n           </div>\r\n            <div class="form-group">\r\n             <label for="password2">Retype New Password</label>\r\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\r\n           </div>\r\n           <button type="submit" class="btn btn-default">Set Password</button>\r\n         </form>\r\n     </div>\r\n'},useData:!0})}();
