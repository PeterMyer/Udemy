import { Subjects, Publisher, PaymentCreatedEvent } from '@pm_tickets/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}