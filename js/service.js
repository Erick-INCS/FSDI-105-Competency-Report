function initService() {
    $('#shower').hide();
    $('#hairCut').hide();
    $('#nailsCut').hide();
    
    $('#shower-btn').on('click', function () {
        $('#shower').show();
        $('#nailsCut, #fullService, #hairCut').hide();
    });

    $('#full-service-btn').on('click', function () {
        $('#fullService').show();
        $('#nailsCut, #shower, #hairCut').hide();
    });

    $('#nails-cut-btn').on('click', function () {
        $('#nailsCut').show();
        $('#shower, #fullService, #hairCut').hide();
    });

    $('#hair-cut-btn').on('click', function () {
        $('#hairCut').show();
        $('#nailsCut, #fullService, #nailsCut').hide();
    });
}

window.onload = initService;