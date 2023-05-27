export type AmplifyDependentResourcesAttributes = {
    "function": {
        "tfybackend": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "apitfy": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}