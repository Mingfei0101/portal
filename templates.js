!function(){var a=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l["tmpl-readers"]=a({compiler:[7,">= 4.0.0"],main:function(a,l,r,n,e){var t,s=null!=l?l:{},o=r.helperMissing,i="function",d=a.escapeExpression;return'<div>\r\n  <div class = "tab-container">\r\n  <div class = "dropdown-reader">\r\n    <label class="control-label" for="reader_id">Reader ID</label>\r\n    <select class="btn btn-default dropdown-toggle" type="button" id="readers-container" size = "10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\r\n      <span class="caret"></span>\r\n    </select>\r\n  </div>\r\n  <div class="form-container">\r\n    <form name="myForm" id="submitForm" >\r\n      <div class="form-group">\r\n        <label class="control-label" for="url">URL</label>\r\n        <input type="text" class="form-control" name='+d((t=null!=(t=r.url||(null!=l?l.url:l))?t:o,typeof t===i?t.call(s,{name:"url",hash:{},data:e}):t))+'>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="control-label" for="reader_id">Reader ID</label>\r\n        <input type="text" class="form-control" name='+d((t=null!=(t=r.reader_id||(null!=l?l.reader_id:l))?t:o,typeof t===i?t.call(s,{name:"reader_id",hash:{},data:e}):t))+'>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="control-label" for="name">Name</label>\r\n        <input type="text" class="form-control" name='+d((t=null!=(t=r.name||(null!=l?l.name:l))?t:o,typeof t===i?t.call(s,{name:"name",hash:{},data:e}):t))+'>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="control-label" for="description">Description</label>\r\n        <input type="text" class="form-control" name='+d((t=null!=(t=r.description||(null!=l?l.description:l))?t:o,typeof t===i?t.call(s,{name:"description",hash:{},data:e}):t))+'>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="control-label" for="user_id">User ID</label>\r\n        <input type="text" class="form-control" name='+d((t=null!=(t=r.user_id||(null!=l?l.user_id:l))?t:o,typeof t===i?t.call(s,{name:"user_id",hash:{},data:e}):t))+'>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <div class="sumbit">\r\n          <button type="submit" class="btn btn-primary">Submit</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</form>\r\n</div>\r\n</div>\r\n</div>\r\n'},useData:!0}),l["tmpl-tags"]=a({compiler:[7,">= 4.0.0"],main:function(a,l,r,n,e){var t;return"<div> "+a.escapeExpression((t=null!=(t=r.text||(null!=l?l.text:l))?t:r.helperMissing,"function"==typeof t?t.call(null!=l?l:{},{name:"text",hash:{},data:e}):t))+" </div>\r\n"},useData:!0}),l["tmpl-tr"]=a({compiler:[7,">= 4.0.0"],main:function(a,l,r,n,e){var t,s=null!=l?l:{},o=r.helperMissing,i="function",d=a.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+d((t=null!=(t=r.result||(null!=l?l.result:l))?t:o,typeof t===i?t.call(s,{name:"result",hash:{},data:e}):t))+"');return false;\" >"+d((t=null!=(t=r.task_name||(null!=l?l.task_name:l))?t:o,typeof t===i?t.call(s,{name:"task_name",hash:{},data:e}):t))+"</a></td><td>"+d((t=null!=(t=r.timestamp||(null!=l?l.timestamp:l))?t:o,typeof t===i?t.call(s,{name:"timestamp",hash:{},data:e}):t))+"</td><td>"+d((r.json_metatags||l&&l.json_metatags||o).call(s,null!=l?l.tags:l,{name:"json_metatags",hash:{},data:e}))+"</td></tr>\r\n"},useData:!0}),l["tmpl-user"]=a({compiler:[7,">= 4.0.0"],main:function(a,l,r,n,e){var t,s=null!=l?l:{},o=r.helperMissing,i="function",d=a.escapeExpression;return'      <h2>User Profile</h2>\r\n      <div id="user_profile">\r\n          <div id="photo" class="col-md-2" style="width:200px ">\r\n            <img src="'+d((t=null!=(t=r.gravator_url||(null!=l?l.gravator_url:l))?t:o,typeof t===i?t.call(s,{name:"gravator_url",hash:{},data:e}):t))+'?s=180&d=mm"><br><br>\r\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\r\n            <a id="reset_password" style="clear:both;">Reset Password</a>\r\n          </div>\r\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\r\n              <div class="form-group">\r\n                <label class="col-md-3 control-label">Username</label>\r\n                  <div class="col-md-09">\r\n                <p class="form-control-static">'+d((t=null!=(t=r.username||(null!=l?l.username:l))?t:o,typeof t===i?t.call(s,{name:"username",hash:{},data:e}):t))+'</p>\r\n                </div>\r\n            </div>\r\n             <div class="form-group">\r\n                  <label class="col-md-3 control-label">Name</label>\r\n                    <div class="col-md-09">\r\n                  <p class="form-control-static">'+d((t=null!=(t=r.name||(null!=l?l.name:l))?t:o,typeof t===i?t.call(s,{name:"name",hash:{},data:e}):t))+'</p>\r\n                  </div>\r\n            </div>\r\n              <div class="form-group">\r\n                <label class="col-md-3 control-label">Email</label>\r\n                  <div class="col-md-09">\r\n                    <p class="form-control-static">'+d((t=null!=(t=r.email||(null!=l?l.email:l))?t:o,typeof t===i?t.call(s,{name:"email",hash:{},data:e}):t))+'</p>\r\n                 </div>\r\n             </div>\r\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\r\n         </form>\r\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\r\n              <div style="display:none">\r\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+d((t=null!=(t=r.csrftoken||(null!=l?l.csrftoken:l))?t:o,typeof t===i?t.call(s,{name:"csrftoken",hash:{},data:e}):t))+'"/>\r\n             </div>\r\n              <div class="form-group">\r\n                 <label for="first_name">First Name</label>\r\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+d((t=null!=(t=r.first_name||(null!=l?l.first_name:l))?t:o,typeof t===i?t.call(s,{name:"first_name",hash:{},data:e}):t))+'">\r\n             </div>\r\n              <div class="form-group">\r\n                   <label for="last_name">Last Name</label>\r\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+d((t=null!=(t=r.last_name||(null!=l?l.last_name:l))?t:o,typeof t===i?t.call(s,{name:"last_name",hash:{},data:e}):t))+'">\r\n               </div>\r\n              <div class="form-group">\r\n                 <label for="email">Email address</label>\r\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+d((t=null!=(t=r.email||(null!=l?l.email:l))?t:o,typeof t===i?t.call(s,{name:"email",hash:{},data:e}):t))+'">\r\n             </div>\r\n             <button type="submit" id="form_submit" class="btn btn-default pull-right">Update</button>\r\n         </form>\r\n         <div class="row" style="width:100%;clear:both;"></div>\r\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\r\n            <div style="display:none">\r\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+d((t=null!=(t=r.csrftoken||(null!=l?l.csrftoken:l))?t:o,typeof t===i?t.call(s,{name:"csrftoken",hash:{},data:e}):t))+'"/>\r\n           </div>\r\n            <div class="form-group">\r\n             <label for="password">New Password</label>\r\n              <input type="password" class="form-control" name="password" placeholder="New Password">\r\n           </div>\r\n            <div class="form-group">\r\n             <label for="password2">Retype New Password</label>\r\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\r\n           </div>\r\n           <button type="submit" class="btn btn-default">Set Password</button>\r\n         </form>\r\n     </div>\r\n'},useData:!0})}();
