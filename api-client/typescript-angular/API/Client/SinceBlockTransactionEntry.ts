/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface SinceBlockTransactionEntry {

        /**
         * DEPRECATED. The account name associated with the transaction. Will be \"\" for the default account.
         */
        "account"?: string;

        /**
         * The syscoin address of the transaction. Not present for move transactions (category = move).
         */
        "address"?: string;

        /**
         * The transaction category. 'send' has negative amounts, 'receive' has positive amounts.
         */
        "category"?: string;

        /**
         * The amount in SYS. This is negative for the 'send' category, and for the 'move' category for moves outbound. It is positive for the 'receive' category, and for the 'move' category for inbound funds.
         */
        "amount"?: number;

        /**
         * the vout value
         */
        "vout"?: number;

        /**
         * The amount of the fee in SYS. This is negative and only available for the 'send' category of transactions.
         */
        "fee"?: number;

        /**
         * The number of confirmations for the transaction. Available for 'send' and 'receive' category of transactions.
         */
        "confirmations"?: number;

        /**
         * The block hash containing the transaction. Available for 'send' and 'receive' category of transactions.
         */
        "blockhash"?: string;

        /**
         * The block index containing the transaction. Available for 'send' and 'receive' category of transactions.
         */
        "blockindex"?: number;

        /**
         * The block time in seconds since epoch (1 Jan 1970 GMT).
         */
        "blocktime"?: number;

        /**
         * The transaction id. Available for 'send' and 'receive' category of transactions.
         */
        "txid"?: string;

        /**
         * The transaction time in seconds since epoch (Jan 1 1970 GMT).
         */
        "time"?: number;

        /**
         * The time received in seconds since epoch (Jan 1 1970 GMT). Available for 'send' and 'receive' category of transactions.
         */
        "timereceived"?: number;

        /**
         * If a comment is associated with the transaction.
         */
        "comment"?: string;

        /**
         * A comment for the address/transaction, if any
         */
        "label"?: string;

        /**
         * If a comment to is associated with the transaction.
         */
        "to"?: string;
    }

}
