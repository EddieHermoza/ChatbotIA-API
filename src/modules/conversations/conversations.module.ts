import { Module } from '@nestjs/common'

import { ConversationsService } from './conversations.service'
import { ConversationsController } from './conversations.controller'

@Module({
  controllers: [ConversationsController],
  providers: [ConversationsService],
  exports: [ConversationsService],
})
export class ConversationsModule {}
