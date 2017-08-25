import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model'

@Pipe({
  name: 'userPipe',
  pure: false
})

export class UserPipe implements PipeTransform {

  transform(input: User[], desiredPriority) {
    var output: User[] = [];
    if (desiredPriority === "optionMakers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "noise-maker") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriority === "optionOrganizers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "organizer") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
