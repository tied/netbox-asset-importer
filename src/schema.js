export const mapping = {"$schema":"https://api.atlassian.com/jsm/assets/imports/external/schema/versions/2023_10_19","schema":{"objectSchema":{"name":"DCIM","description":"Assets imported from NetBox DCIM","objectTypes":[{"externalId":"object-type/device","name":"Device","description":"A device is a physical asset that is managed by NetBox DCIM","attributes":[{"externalId":"object-type-attribute/device-id","name":"Netbox Id","description":"The unique identifier of the device","type":"integer","label":false,"unique":true},{"externalId":"object-type-attribute/device-name","name":"Device Name","description":"The name of the device","type":"text","label":true},{"externalId":"object-type-attribute/device-url","name":"Netbox URL","description":"Source URL of the device in Netbox","type":"url","label":false}]}]}},"mapping":{"objectTypeMappings":[{"objectTypeExternalId":"object-type/device","objectTypeName":"Device","selector":"devices","description":"devices","attributesMapping":[{"attributeExternalId":"object-type-attribute/device-id","attributeName":"id","attributeLocators":["id"],"externalIdPart":false},{"attributeExternalId":"object-type-attribute/device-name","attributeName":"name","attributeLocators":["name"],"externalIdPart":false},{"attributeExternalId":"object-type-attribute/device-url","attributeName":"url","attributeLocators":["url"],"externalIdPart":true}]}]}};
