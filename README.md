# HTML Content Editor

Small lwc for easily inserting html into Salesforce pages and flow screens.

## Overview

The component allows developers to incorporate valid HTML eliminating the need to create an lwc for simple tasks like adding headers or hr tags but can be used for any situation where directly embedding html would be helpful.

It supports custom CSS for advanced styling options and includes security measures to ensure safe content rendering.

## Features

- Display custom HTML content in Salesforce Flows
- Apply custom CSS for advanced styling
- Utilizes Shadow DOM for style encapsulation
- Implements DOMPurify for HTML sanitization

## Installation

1. Clone this repository
2. Deploy the component to your Salesforce org using your preferred deployment tool (e.g., Salesforce CLI, VS Code, or Workbench).
3. Upload the DOMPurify library as a static resource in your Salesforce org. Ensure it is named 'DOMPurify' to match the import statement in the component.

## Usage

1. In your Flow builder, add the "HTML Content Display" custom component to your screen.
2. Configure the component properties:
- `htmlContent`: Enter your HTML content here.
- `cssContent`: Add any custom CSS styles here.
3. Save and activate your Flow.

## Best Practices

- Always sanitize HTML inputs, even in a development environment.
- Test the component thoroughly in a sandbox environment before deploying to production.
- Ensure that the HTML and CSS content adheres to your organization's standards and accessibility requirements.

## Contributing

We welcome contributions to improve this component. If you've identified a bug or have a feature request, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---