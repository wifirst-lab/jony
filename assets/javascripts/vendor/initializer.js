$(function (){
  $('input.btn, a.btn[data-remote=true]').click(function() {
    $(this).attr('data-disable-with', 'Chargement...');
  });

  $.fn.editable.defaults.ajaxOptions = {type: 'PUT', dataType: 'json'};
  $.fn.editable.defaults.unsavedclass = null;
  $.fn.editable.defaults.params = function(params) {
    hash = {};
    hash[params['name']] = params['value'];
    return hash;
  };
  $('.editable').editable({
    emptytext: "Non renseigné",
    placement: 'right',
    mode: "popup"
  });

  $('input.date').datepicker({
    format: 'dd/mm/yyyy',
    language: 'fr',
    weekStart: 1,
    autoclose: true
  });

  $("select.select2").select2({
    allowClear: true
  });

  // build all tooltips from data-attributes
  $("[data-toggle='tooltip']").each(function (index, el) {
    $(el).tooltip({
      placement: $(this).data("placement") || 'top'
    });
  });
});
