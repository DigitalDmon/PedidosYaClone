import AntDesignHomeIcon from '@expo/vector-icons/AntDesign';
import AntDesignInfoIcon from '@expo/vector-icons/AntDesign';
import AntDesignPromotionsIcon from '@expo/vector-icons/AntDesign';
import AntDesignOrdersIcon from '@expo/vector-icons/AntDesign';

export const HomeIcon = (props) => (
    <AntDesignHomeIcon name="home" size={24} color="white" {...props} />
)

export const UserProfile = (props) => (
    <AntDesignInfoIcon name="user" size={24} color="white" {...props} />
)

export const PromotionsIcon = (props) => (
    <AntDesignPromotionsIcon name="tags" size={24} color="white" {...props} />
)

export const OrdersIcon = (props) => (
    <AntDesignOrdersIcon name="profile" size={24} color="white" {...props} />
)