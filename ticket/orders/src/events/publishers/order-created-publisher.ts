import { Publisher, Subjects, OrderCreatedEvent } from "@pm_tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}