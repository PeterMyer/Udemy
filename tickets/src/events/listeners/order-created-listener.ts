import { Message } from 'node-nats-streaming';
import { Listener, OrderCreatedEvent, Subjects } from '@pm_tickets/common'
import { queueGroupName } from './queue-group-name'
import { Ticket } from '../../models/ticket'
import { TicketUpdatedPublisher } from '../publishers/ticket-updated-publisher';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
    queueGroupName = queueGroupName

    async onMessage(data: OrderCreatedEvent['data'], msg: Message){
        const ticket = await Ticket.findById(data.ticket.id);

        if(!ticket){
            throw new Error('Ticket not found');
        }

        ticket.set({orderId: data.id})

        await ticket.save();
        new TicketUpdatedPublisher(this.client);

        msg.ack()
    }
}