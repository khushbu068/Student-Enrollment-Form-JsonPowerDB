
// Simulated jpdb-commons.js placeholder for demo purpose only
function createPUTRequest(token, jsonObj, dbName, relName) {
    return JSON.stringify({ token, cmd: "PUT", dbName, rel: relName, jsonStr: jsonObj });
}

function createGET_BY_KEYRequest(token, dbName, relName, jsonObjStr) {
    return JSON.stringify({ token, cmd: "GET_BY_KEY", dbName, rel: relName, jsonStr: jsonObjStr });
}

function createUPDATERecordRequest(token, jsonObj, dbName, relName, recordKey) {
    return JSON.stringify({ token, cmd: "UPDATE", dbName, rel: relName, jsonStr: jsonObj, recordKey });
}

function executeCommandAtGivenBaseUrl(request, baseUrl, apiEndPointUrl) {
    var result = "";
    $.ajax({
        url: baseUrl + apiEndPointUrl,
        type: "POST",
        data: request,
        async: false,
        success: function(response) {
            result = response;
        },
        error: function(error) {
            result = error.responseText;
        }
    });
    return result;
}
