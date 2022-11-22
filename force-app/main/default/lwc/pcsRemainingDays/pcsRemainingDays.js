import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import REMAINING_DAYS_FIELD from '@salesforce/schema/PCS__c.PazoRestante__c';

const fields = [REMAINING_DAYS_FIELD];

export default class PcsRemainingDays extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields })
    project;

    get remainingDays() {
        return getFieldValue(this.project.data, REMAINING_DAYS_FIELD);
    }
}