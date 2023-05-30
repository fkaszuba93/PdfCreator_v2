
$('#saveButton').click(() => {
    
});

var selectedElement, count = 0;

$('#addElementButton').click(() => {
    var selectedType = $('#elementType').val();
    var text = $('#elementText').val();
    var id = $('#elementId').val();
    var element;
    if (selectedType === 'text') {
        element = text;
    } else {
        element = `<input type="${selectedType}" id="${id}" name="${id}" />
                    <label for="${id}">${text}</label>`;
    }

    var divId = `element${count++}`;
    $('#documentContent').append(`<div id="${divId}" style="padding-bottom: 0.25rem;">${element}</div>`);
    addClickHandler(divId);
});

function addClickHandler(elementId) {
    $(`#${elementId}`).click(() => {
        selectedElement = $(`#${elementId}`);

        const selected = 'border border-4 border-danger';
        $('#documentContent').children().removeClass(selected);
        selectedElement.addClass(selected);

        $('#deleteElementButton').prop('disabled', false);
    });
}

$('#deleteElementButton').click(() => {
    selectedElement.remove();
    $('#deleteElementButton').prop('disabled', true);
});
