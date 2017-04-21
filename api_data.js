define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_jorge_Develop_api_doc_doc_main_js",
    "groupTitle": "C__Users_jorge_Develop_api_doc_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/contacts/",
    "title": "Get All Contact",
    "name": "GetAllContact",
    "group": "Contact",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit the result default 1000.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchByFirstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchByLastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchByFullName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchByAlienNumber",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Token"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "contacts",
            "description": "<p>JSON object with all the contact Info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{ contacts: [\n     {\n         \"first_name\": \"Jorge\",\n         \"last_name\": \"Diaz\",\n         \"middle_name\": \"\",\n         \"sex_male\": \"on\",\n         \"sex_female\": \"off\"\n     }\n     {\n         \"first_name\": \"John\",\n         \"last_name\": \"Doe\",\n         \"middle_name\": \"X\",\n         \"sex_male\": \"on\",\n         \"sex_female\": \"off\"\n     }\n ]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "access-denied",
            "description": "<p>The access to this contact is not enable.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "access-denied:",
          "content": "HTTP/1.1 403 Access Denied\n{\n  \"error\": \"You do not have access to this.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contacts/:id",
    "title": "Get A Contact",
    "name": "GetContact",
    "group": "Contact",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Contact unique Id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Token"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "contacts",
            "description": "<p>JSON object with the contact Info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{ contacts: {\n     \"first_name\": \"Jorge\",\n     \"last_name\": \"Diaz\",\n     \"middle_name\": \"\",\n     \"sex_male\": \"on\",\n     \"sex_female\": \"off\"\n}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missing-id",
            "description": "<p>The id is required.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "wrong-type",
            "description": "<p>The id must be Integer.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "access-denied",
            "description": "<p>The access to this contact is not enable.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "missing-id:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"The request must have the user Id\"\n}",
          "type": "json"
        },
        {
          "title": "wrong-type:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"The contact id must be Integer\"\n}",
          "type": "json"
        },
        {
          "title": "access-denied:",
          "content": "HTTP/1.1 403 Access Denied\n{\n  \"error\": \"You do not have access to this contact\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Contact.js",
    "groupTitle": "Contact"
  }
] });
