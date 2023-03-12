import { Publisher, Subjects, OrderCancelledEvent } from "@pm_tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}