# CAP-046 Invoice cancellation evidence

Captured on 2026-08-28 against the current Rondo Club checkout.

## Verified

- `InvoiceCancellationTest` passed: 5 tests, 23 assertions.
- A sent invoice can transition to `cancelled`; Rondo clears its local payment route and provider identifiers while retaining the public token for an explanatory status page.
- The transition records who cancelled the invoice and when.
- A cancelled invoice cannot receive a new payment link and is excluded from both whole-invoice and instalment reminder sweeps.
- Reactivation restores the sent status and clears the cancellation audit fields.
- A paid invoice must first be returned to an unpaid state before it can be cancelled.
- The dashboard calculates outstanding totals from sent and overdue invoices only, while cancelled invoices remain visible as their own status.

## Still operationally open

- Cancel a controlled invoice with a real Mollie sandbox payment link and confirm that the provider link is archived.
- Open the retained public payment token and capture the explanatory cancelled-invoice page.
- Capture the resulting status and cancellation history in the authenticated invoice detail.
