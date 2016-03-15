<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title></title>
  <script src="Scripts/jquery-1.10.2.js"></script>
  <script type="text/javascript">
    $(function() {
      $('<input />', {
        id: 'cbx',
        name: 'cbx',
        type: 'checkbox',
        checked: 'checked',
        click: function() {
          alert("点我了~~");
        }
      }).appendTo($('#wrap'));
    });
  </script>
</head>
<body>
  <div id="wrap"></div>
</body>