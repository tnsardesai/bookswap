// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const aws_app_analytics = 'enable';
const aws_cognito_identity_pool_id = 'us-east-1:917607b0-59af-4aaa-808b-1f700f5d4a19';
const aws_cognito_region = 'us-east-1';
const aws_content_delivery = 'enable';
const aws_content_delivery_bucket = 'mobilehubproject-hosting-mobilehub-537999881';
const aws_content_delivery_bucket_region = 'us-east-1';
const aws_content_delivery_cloudfront = 'enable';
const aws_content_delivery_cloudfront_domain = 'd1s0ntfa9du11j.cloudfront.net';
const aws_dynamodb = 'enable';
const aws_dynamodb_all_tables_region = 'us-east-1';
const aws_dynamodb_table_schemas = '[{"tableName":"ionic-mobile-hub-tasks-bookswap","attributes":[{"name":"userId","type":"S"},{"name":"taskId","type":"S"},{"name":"category","type":"S"},{"name":"created","type":"N"},{"name":"description","type":"S"}],"indexes":[{"indexName":"DateSorted","hashKey":"userId","rangeKey":"created"}],"region":"us-east-1","hashKey":"userId","rangeKey":"taskId"}]';
const aws_mobile_analytics_app_id = 'ac83d480fd61496d8acbc959f9e2d6a7';
const aws_project_id = '5761ff0c-00f6-4a7c-a276-172d3fe18aee';
const aws_project_name = 'mobile-hub-project';
const aws_project_region = 'us-east-1';
const aws_resource_name_prefix = 'mobilehubproject-mobilehub-537999881';
const aws_sign_in_enabled = 'enable';
const aws_user_files = 'enable';
const aws_user_files_s3_bucket = 'mobilehubproject-userfiles-mobilehub-537999881';
const aws_user_files_s3_bucket_region = 'us-east-1';
const aws_user_pools = 'enable';
const aws_user_pools_id = 'us-east-1_nHcLxcueR';
const aws_user_pools_mfa_type = 'OFF';
const aws_user_pools_web_client_id = '69t6r07n7cjj5s6p87kn2rsp2i';
const aws_user_settings = 'enable';

AWS.config.region = aws_project_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: aws_cognito_identity_pool_id
  }, {
    region: aws_cognito_region
});
AWS.config.update({customUserAgent: 'MobileHub v0.1'});