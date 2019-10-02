# (Kwai Chang) Caine

Microsoft Teams bot for Kung Fu-powered smackdowns

<img src="example_usage.png" width="640"/>

This is very much in alpha.

## Requirements

`$ npm install`

NOTE: the `aws-sdk` module in `package.json` is only required for the DynamoDB storage backend.

## Configuration

1. First, wade through all of Microsoft's Bot Framework registration BS.
1. Then, copy `.env-dist` to `.env` and fill in the `APP_ID` and `APP_PASSWORD` values.
