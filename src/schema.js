export const mapping = {"$schema":"https://api.atlassian.com/jsm/assets/imports/external/schema/versions/2023_10_19","schema":{"objectSchema":{"name":"DCIM","description":"Assets imported from NetBox DCIM","objectTypes":[{"externalId":"object-type/device","name":"Device","description":"A device is a physical asset that is managed by NetBox DCIM","attributes":[{"externalId":"object-type-attribute/device-id","name":"Netbox Id","description":"The unique identifier of the device","type":"integer","label":false,"unique":true},{"externalId":"object-type-attribute/device-name","name":"Device Name","description":"The name of the device","type":"text","label":true},{"externalId":"object-type-attribute/device-url","name":"Netbox URL","description":"Source URL of the device in Netbox","type":"url","label":false},{"externalId":"object-type-attribute/device-manufacturer","name":"Manufacturer","description":"The manufacturer of the device","type":"referenced_object","referenceObjectTypeExternalId":"object-type/manufacturer","label":false}]},{"externalId":"object-type/manufacturer","name":"Manufacturer","description":"A manufacturer is a company that produces devices","attributes":[{"externalId":"object-type-attribute/manufacturer-id","name":"id","description":"The unique identifier of the manufacturer","type":"integer","label":false,"unique":true},{"externalId":"object-type-attribute/manufacturer-name","name":"Manufacturer Name","description":"The name of the manufacturer","type":"text","label":true},{"externalId":"object-type-attribute/manufacturer-url","name":"Netbox URL","description":"Source URL of the manufacturer in Netbox","type":"url","label":false}]}]}},"mapping":{"objectTypeMappings":[{"objectTypeExternalId":"object-type/device","objectTypeName":"Device","selector":"devices","description":"devices","attributesMapping":[{"attributeExternalId":"object-type-attribute/device-id","attributeName":"id","attributeLocators":["id"],"externalIdPart":false},{"attributeExternalId":"object-type-attribute/device-name","attributeName":"name","attributeLocators":["name"],"externalIdPart":false},{"attributeExternalId":"object-type-attribute/device-url","attributeName":"url","attributeLocators":["url"],"externalIdPart":true},{"attributeExternalId":"object-type-attribute/device-manufacturer","attributeName":"Manufacturer","attributeLocators":["device_type.manufacturer.id"],"objectMappingIQL":"id = ${device_type.manufacturer.id}","externalIdPart":false}]},{"objectTypeExternalId":"object-type/manufacturer","objectTypeName":"Manufacturer","selector":"devices.device_type.manufacturer","description":"manufacturers","attributesMapping":[{"attributeExternalId":"object-type-attribute/manufacturer-id","attributeName":"id","attributeLocators":["id"],"externalIdPart":false},{"attributeExternalId":"object-type-attribute/manufacturer-name","attributeName":"Manufacturer Name","attributeLocators":["name"],"externalIdPart":false},{"attributeExternalId":"object-type-attribute/manufacturer-url","attributeName":"Netbox URL","attributeLocators":["url"],"externalIdPart":true}]}]}};
