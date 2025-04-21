import { CometChatUsers, SelectionMode } from "@cometchat/chat-uikit-react";

function UsersDemo() {
  function handleOnSelect(users: CometChat.User, selected: boolean): void {
    console.log(users);
    //your custom onSelect actions
    console.log(selected);
  }

  return (
    <CometChatUsers
      selectionMode={SelectionMode.multiple}
      onSelect={handleOnSelect}
    />
  );
}

export default UsersDemo;