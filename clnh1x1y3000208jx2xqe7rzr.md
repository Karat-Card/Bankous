---
title: "Easily Embed Checkout Into Your SaaS or E-Commerce Page"
seoTitle: "Create a Custom Payment Form with Authorize.Net For Seamless Checkout"
seoDescription: "Learn how to create a custom payment form using Authorize.Net. Enhance your brand, improve security, and offer a seamless checkout experience on your websit"
datePublished: Sun Oct 08 2023 05:56:26 GMT+0000 (Coordinated Universal Time)
cuid: clnh1x1y3000208jx2xqe7rzr
slug: easily-embed-checkout-into-your-saas-or-e-commerce-page
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1696743798707/cc92ba69-13a2-4919-afea-d104526ed9f5.gif
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1696744361874/f53cd4f7-b52b-4283-87a6-68f15ad20319.gif
tags: javascript, php, html5, payment, fintech

---

In the ever-evolving landscape of online payments, businesses often find themselves searching for ways to offer seamless and secure checkout experiences for their customers. While there are numerous payment gateways available, customizing your payment form can provide a distinct advantage. In this guide, I will explore how to create a custom payment form using [Authorize.Net](http://Authorize.Net), the leading and highly well-known payment gateway provider. I'll delve into the use case and value of building your own payment form before diving into the step-by-step details.

## **Use Case**

Imagine you run an e-commerce website or a subscription-based service. You want to offer your customers a streamlined, branded payment experience, rather than redirecting them to a third-party payment page. This not only enhances your brand's professionalism but also instills trust in your customers.

**By creating your custom payment form with** [**Authorize.Net**](http://Authorize.Net)**, you can:**

1. **Maintain Brand Consistency**: Your payment form will seamlessly integrate with your website's design and branding, offering a cohesive user experience.
    
2. **Enhance Security**: You have full control over data security, ensuring that sensitive payment information is handled according to industry standards.
    
3. **Access Advanced Features**: Custom forms can be tailored to include additional features like coupon codes, subscription options, and more, providing a flexible checkout process.
    
4. **Capture Customer Data**: You can capture and store customer data securely for future transactions, simplifying the checkout process for return customers.
    

But you already know the use case and if you're reading this, then you might have your use case already, so I will just dive right in:

![authorize.net payment diagram](https://cdn.hashnode.com/res/hashnode/image/upload/v1696741319095/e35d0b9a-f374-4897-8024-09abd8f793a5.png align="center")

### **Step 1: Set Up Your** [**Authorize.Net**](http://Authorize.Net) **Account**

Before you can start building your custom payment form, you'll need to have an [Authorize.Net](http://Authorize.Net) account, if you don't already have one. Once registered, you'll obtain your API credentials: an API Login ID and a Transaction Key.

### **Step 2: Include The** [**Authorize.Net**](http://Authorize.Net) **JavaScript SDK**

In your HTML code, include the [Authorize.Net](http://Authorize.Net) JavaScript SDK. This SDK will allow you to interact with [Authorize.Net](http://Authorize.Net)'s payment processing services. You can load it from their CDN like this:

```javascript
<script src="https://jstest.authorize.net/v3/Accept.js" charset="utf-8"></script>
```

### **Step 3: Create the Payment Form**

Design your payment form. For simplicity, I will include just the input fields for the credit card number and expiration date. For example:

```html
<form id="payment-form" method="post" action="process_payment.php">
    <div>
        <label for="credit-card">Credit Card Number:</label>
        <input type="text" id="credit-card" name="credit-card" placeholder="XXXX XXXX XXXX XXXX" required>
    </div>
    <div>
        <label for="expiration-date">Expiration Date:</label>
        <input type="text" id="expiration-date" name="expiration-date" placeholder="MM/YYYY" required>
    </div>
    <!-- put other input fields here needed -->
    <div id="payment-container"></div>
    <button type="submit">Submit Payment</button>
</form>
```

<div data-node-type="callout">
<div data-node-type="callout-emoji">📘</div>
<div data-node-type="callout-text">I recommend you also include inputs for the cardholder name and cvv and maybe even the cardholder address.</div>
</div>

### **Step 4: Initialize** [**Authorize.Net**](http://Authorize.Net) **Payment Form**

In your JavaScript code, initialize the [Authorize.Net](http://Authorize.Net) payment form. Replace `'YOUR_API_LOGIN_ID'` with your actual API Login ID:

```javascript
var authorizeNetOptions = {
    apiLoginID: 'YOUR_API_LOGIN_ID',
    paymentOptions: {
        container: 'payment-container',
        testRequest: true, // Remove this for live transactions
        transactionType: 'authCaptureTransaction', // or 'authOnlyTransaction' for authorization only
        currency: 'USD', // Change to your preferred currency
        amount: '10.00', // Set the payment amount
        successCallback: function(response) {
            // Handle successful payment
            console.log(response);
        },
        errorCallback: function(response) {
            // Handle payment error
            console.error(response);
        }
    }
};

var secureData = {};

var secureDataOptions = {
    secureData: secureData,
    success: function(response) {
        // Handle secure data success
        console.log(response);
    }
};

var paymentForm = new AuthorizeNet(apiLoginID, secureDataOptions);
```

### **Step 5: Submit the Payment Form**

When your users or customers submit the form, the payment information will be securely processed within your environment. Handle the success or error callbacks accordingly.

### **Step 6: Process the Payment Server-Side**

Create a server-side script (e.g., `process_payment.php`) to handle the payment processing. Use the [Authorize.Net](http://Authorize.Net) API to process the payment and handle the transaction response as shown in the step above.

```php-template
<?php
require 'anet_php_sdk/autoload.php'; // Include the Authorize.Net PHP SDK

use net\authorize\api\contract\v1 as AnetAPI;
use net\authorize\api\controller as AnetController;

// Define your Authorize.Net API credentials
define("API_LOGIN_ID", "YOUR_API_LOGIN_ID");
define("API_TRANSACTION_KEY", "YOUR_API_TRANSACTION_KEY");
define("SANDBOX", true); // Set to true for sandbox/testing, false for production

// Get the credit card and expiration date from the form
$creditCardNumber = $_POST['credit-card'];
$expirationDate = $_POST['expiration-date'];

// Create a transaction request
$request = new AnetAPI\CreateTransactionRequest();
$request->setMerchantAuthentication(
    new AnetAPI\MerchantAuthenticationType([
        'name' => API_LOGIN_ID,
        'transactionKey' => API_TRANSACTION_KEY
    ])
);

// Create a payment type with the credit card information
$creditCard = new AnetAPI\CreditCardType();
$creditCard->setCardNumber($creditCardNumber);
$creditCard->setExpirationDate($expirationDate);

$paymentOne = new AnetAPI\PaymentType();
$paymentOne->setCreditCard($creditCard);

// Create an order
$order = new AnetAPI\OrderType();
$order->setDescription("Payment Description");

// Set the transaction amount
$amount = 10.00; // Set the desired payment amount
$transactionRequestType = new AnetAPI\TransactionRequestType();
$transactionRequestType->setTransactionType("authCaptureTransaction");
$transactionRequestType->setAmount($amount);
$transactionRequestType->setOrder($order);
$transactionRequestType->setPayment($paymentOne);

$request->setTransactionRequest($transactionRequestType);

// Create a transaction controller
$controller = new AnetController\CreateTransactionController($request);

if (SANDBOX) {
    $request->setTestRequest("true");
}

// Execute the transaction
$response = $controller->executeWithApiResponse(\net\authorize\api\constants\ANetEnvironment::SANDBOX);

if ($response != null) {
    $tresponse = $response->getTransactionResponse();

    if ($tresponse != null && $tresponse->getResponseCode() == "1") {
        // Successful transaction, do something (e.g., save the transaction details)
        $transactionId = $tresponse->getTransId();
        echo "Transaction ID: " . $transactionId;
    } else {
        // Payment declined or error, handle accordingly
        echo "Transaction Failed: " . $tresponse->getErrors()[0]->getErrorText();
    }
} else {
    // Error with the request, handle accordingly
    echo "Transaction Failed: " . $response->getMessages()->getMessage()[0]->getText();
}
?>
```

Creating a custom payment form with [Authorize.Net](http://Authorize.Net) offers your business the flexibility to tailor the payment experience, maintain brand consistency, and ensure data security. By following these steps, you can provide your customers with a seamless and trusted payment process that enhances their overall shopping or subscription experience on your website/platform.

---

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696742051622/71e2ed57-cdd9-44e5-85cc-efba24fadd32.png align="center")

Are you a startup or small business processing $25,000+ in transactions every month and you're looking for a [corporate card with high credit limits](https://paygeon.io)? Check out [Paygeon.io](https://paygeon.io) to see if you qualify with no negative impact on your credit score!

Paygeon is the new fintech sweeping the nation, providing vendor management services using AI and its highly coveted smart corporate card.

"...One thing I absolutely love is the option to set up automatic payments for invoices. It's like a magic trick that takes away the monthly hassle of sitting down and paying each invoice one by one."

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696743214040/5780a81a-bbd7-4fdb-86dd-12133378836c.png align="left")

Amy Schiffman on TrustPilot

"...They seem to have nailed their algorithm catching invoices that should be disputed. For example, I set up an account using a free trial of \[software\]. Paygeon caught the \[recurring\] invoice and brought it to my attention before I was charged several months' worth of a product I was not using."

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696742709850/ae2b757a-50d4-4bb0-985c-7b54425d0962.png align="left")

Sidney P. on G2