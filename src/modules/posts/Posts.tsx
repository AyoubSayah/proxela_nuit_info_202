import { Box, Center, Flex, Input, Select, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import NewPost from './components/newpost/NewPost'
import Post from './components/Post/Post'
import { useGetPostQuery } from './slices/PostSlice'
const ListOfPosts = [
  {
    id: 2,
    user: {
      name: 'Takwa Al Mekni',
      image:
        'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/214358949_4110672365684391_5799184665093802186_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Jkht1pkOyZwAX9ik5VR&_nc_ht=scontent.ftun8-1.fna&oh=00_AfDBsjwsWxubRjpkXilCr_vwWuh0lSAwWoz9XoNO-FiAYg&oe=6383730A',
    },
    content: `
      لم أفهم معنى الأثر: "لم يُرٓ للمتحابين مثل النكاح"..إلا تلك الليلة !
      كنت في المرحلة الثانوية أبحث في مكتبة أبي عما أملأ به أوقات الراحة في المذاكرة..أو أجور به على أوقات المذاكرة التي لم أحبها يوما :))
      لفت نظري ذاك الظرف المزوي في الأسفل وقد بدا جزء منه تحت الكتب..
      فتحته..
      وإذا كنز هجرت من أجله النوم في ليلة باردة، أحالها لدفء وشجون..
      الخطابات المتبادلة بين أبي وأمي فترة الخطوبة..قصة حبهما التي أعلم أنها طالت قبل الزواج لسبع سنين..
      كثير من النصوص نقشت في خاطري..كررتها..تأملتها..حفظتها..
      هو أمر شبيه باطلاعك على كواليس تصوير فيلم استمتعت به، وأحببت أبطاله..
      لك أن تتخيل حالي وأنا أجدني أمنية في حروف أبي، وبسمة دامعة في كلمات أمي..
      "سنسمي طفلنا الأول محمد..وسأحرص على أن يحفظ القرآن"
      وفعل..جزاه الله عني خيرا..
      ضحكت لآمالهم المبثوثة في السطور..وتوجعت لآلامهم المحبوسة خلف الدعوات..وانتشيت بتفهم كل منهما موقف الآخر في مرحلة كانت قاسية عليهما، والتماس العذر له قبل أن يعتذر..
      "آلمني جدا أن يقال لكِ هذا في حضوري..وتعلمين أن صمتي كان هو عين الحكمة..إني ما زلت مجرد خاطب..سترين بعد كيف يكون صنيعي بك ؟!"
      وأشهد أني ما رأيت صنيعك يا أبي بعدُ إلا إكراما وإحسانا ومروءة..
      "هستناك لو طول العمر..اوعى تخلي حاجة تزعلك وتضغط عليك..ياما بنات بيستنوا نصيبهم يخبط على الباب..أنا بأه مستنية حبيبي"
      كان هذا من ردها على خطاب أرسله من الجيش أول أيامه فيه، وقد كان في صحراء نائية..
      "أتمادى مع أحلامي..وتتراقص الآمال متشابكة كغصون شجرة طيبة..تمتد في ناظري وتمتد..
      حتى تصطدم بجدار المعسكر..فتعود خائبة حسيرة..
      وأفيق على صحراء جافة..ليس فيها أنت !"
      من الصباح واجهتهما بالحقيقة الجميلة..
      "بأه كل ده يطلع منكم ؟!"
      ابتسم أبي فخرا، وكأنه كان ينتظر أن أكتشف هذا الكنز يوما..
      وأطرقت أمي خجلا، وفرحا !! 
      تذكرت هذا كله وأنا أرى معنى "الحب" يُظلم كثيرا في أيامنا هذه..
      من تخلى مع أول صدمة = لم يحب..
      من وعد وزين وعاهد ثم نكص = لم يحب..
      من تردد وتحسّر ولام نفسه تحت ضغط المقارنات الجائرة = لم يحب..
      الحب ليس الانبهار الأول الذي يفتر مع الأيام..
      الحب ليس الحروف المنمقة الخفيفة على اللسان..
      الحب ليس النبل الذي لا يكلف شيئا، ولا تضحية فيه..
      الواقع أن أقل البيوت الذي يبنى على الحب، ولكن الناس يتعاشرون بالإسلام والأحساب..كما قال عمر -رضي الله عنه-..
      والواقع أن الحب شيء يختلف كثيرا عما يظنه الناس حبا !!`,
  },
  {
    id: 1,
    user: {
      name: 'Ayoub Sayah',
    },
    date: '30 October 18:11',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae voluptatibus exercitationem. Iusto ab dolore quis ipsum odio perspiciatis incidunt obcaecati velit. Repellendus, eum unde? Necessitatibus eum aut maxime accusamus!',
    image: 'https://www.nawpic.com/media/2020/bleach-nawpic-9.jpg',
  },
  {
    id: 3,
    user: {
      name: 'Takwa Al Mekni',
      image:
        'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/214358949_4110672365684391_5799184665093802186_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Jkht1pkOyZwAX9ik5VR&_nc_ht=scontent.ftun8-1.fna&oh=00_AfDBsjwsWxubRjpkXilCr_vwWuh0lSAwWoz9XoNO-FiAYg&oe=6383730A',
    },
    content: `
    " ‏لَوْ كنتُ مَيْتًا ونادَتْني بِنَغْمتِها
    ‏لكنتُ لِلشَّوْقِ مِنْ لَحْدِي أُلبيها.. "`,
    date: '27 October 23:49',
    image:
      'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/311970891_5540707906014156_9104709270633266947_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vMHRwISw6OQAX-_FLbP&_nc_ht=scontent.ftun8-1.fna&oh=00_AfDlEMj1NZ_PHtcaesxQm7RJSIbVUbhfwGEbhnkodkUcmA&oe=63838C2A',
  },
  {
    id: 4,
    user: {
      name: 'Feryel Zoghlami',
      image:
        'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/311204056_1320792331992801_1054035264720024097_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KzKqZ4b_gAwAX8eqqrS&_nc_ht=scontent.ftun8-1.fna&oh=00_AfC0EdqSeol2ZReSwOf8sQfZzg__K_lGH8gDW6z1wbamTQ&oe=63836C0C',
    },
    content: `🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈`,
    image:
      'https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-9/43199566_349891109082933_1875041004692701184_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=-9y542yz_rUAX-6EFBX&_nc_ht=scontent.ftun8-1.fna&oh=00_AfBinFmmsITrO7jlQuP9lhHUxib3IgUb0hqK2lKgsLvCFg&oe=63A5BC59',
  },
  {
    id: 5,
    user: {
      name: 'Houssem Gran',
      image:
        'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-1/306008293_1102838903955583_5613390694264834221_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=AA6qAKnisuUAX_aYTTc&_nc_ht=scontent.ftun8-1.fna&oh=00_AfBhw9UqCch_4Ryjej5H1k0_hfGv7Z_TX48kxzICK7qRlQ&oe=6383DE91',
    },
    content: `صورة تلخص سنوات من مشاهدة التنس..`,
    image:
      'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/308796660_642567523895807_2000473573671484075_n.jpg?stp=dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=4Xl5EpW80_sAX_eU3MV&_nc_ht=scontent.ftun8-1.fna&oh=00_AfAbQkbN1_LPT0Zg5TNAcfr5KvWrGroe_POpu3IqEtdzxA&oe=6382D8E6',
  },
  {
    id: 6,
    user: {
      name: 'Yassine Mrad',
      image:
        'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-1/307719499_5801689586529950_3015801856529611078_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dS1v88K_6TMAX_FPVoW&_nc_ht=scontent.ftun8-1.fna&oh=00_AfBlvpRLZvJNAha2l8-ybL2QEbrxTbiVXPCJkTAt8BOIPQ&oe=6383F3B3',
    },
    content: `WHEN YOU FOCUS ON THE GOOD, THE GOOD GETS BETTER 🖤💙`,
    image:
      'https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-9/163074203_4120869674611958_6872263530205572999_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=WW3zwNxfo4oAX__jIVT&_nc_ht=scontent.ftun8-1.fna&oh=00_AfAiQB20dYOzZwswhgDIzak-_FBYimcpG_Uzz6J2toHAUQ&oe=63A5C047',
  },
  {
    id: 7,
    user: {
      name: 'Mahmoud ben Romdhane',
      image:
        'https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-9/46821438_1058274594355339_1885278810861993984_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Oq5kdc6HLFUAX-w4qxX&_nc_ht=scontent.ftun8-1.fna&oh=00_AfAWP51qwHBM3H9jECqeR7kuJZpyWYAMkaEwDXpL3e4Zkw&oe=63A5ED53',
    },
    content: 'Forza Chelsea',
    image:
      'https://scontent.ftun8-1.fna.fbcdn.net/v/t1.18169-9/481078_155184284664379_1891462767_n.jpg?stp=dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=19026a&_nc_ohc=-5_y4IMNP0wAX9lhK1_&_nc_ht=scontent.ftun8-1.fna&oh=00_AfA8Qe2dBpbZpXn3gO8ZfBKxdRTF03uWMKI7fL5S96Rl6A&oe=63A5D89C',
  },
  {
    id: 8,
    user: {
      name: 'Sidi Elbou',
      image:
        'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/278969245_3269760899928454_5932993269445765660_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=u9fJDka-hecAX_DPvK0&_nc_ht=scontent.ftun8-1.fna&oh=00_AfCKkvLzBN4Uq3kYkIxOrZo1odizNqoEnl9uCqdQd0erhg&oe=63834CC1',
    },
    content: 'ميسي في مباراة اليوم ضد السعودية:  ',
    image:
      'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/316409980_537077758444292_3061928384063130023_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ep5hl8vLsNsAX_9Y6WP&_nc_ht=scontent.ftun8-1.fna&oh=00_AfA61MgOMsoMC5b-QrGDZ4DbxwaTZ5o4G7eBzzqX5fiAqA&oe=6383899A',
  },
]
const Posts = () => {
  const { data, isLoading } = useGetPostQuery({})
  useEffect(() => {
    console.log(data, 'data')
  }, [data])
  return (
    <Flex zIndex={15} position="relative" flexWrap="wrap">
      <Box
        boxShadow="lg"
        p="1rem"
        w={{ base: '36rem', xl: '20rem' }}
        mt={{ base: '2rem', md: '7rem' }}
        maxW="100%"
        ml={{ base: 'auto', lg: '3rem', xl: '4rem' }}
        mr="auto"
        rounded="lg"
        background="white"
        position={{ base: 'relative', xl: 'absolute' }}
        height="max-content"
        display={{ base: 'flex', xl: 'block' }}
        flexWrap="wrap"
      >
        <Text fontWeight="bold" my="1rem" textAlign="center" w="full">
          Filters
        </Text>
        <Text fontWeight="bold" my="1rem">
          Sort By
        </Text>
        <Select>
          <option value="newest" defaultChecked>
            Newest
          </option>
          <option value="oldest">Oldest</option>
          <option value="most-liked">Most Liked</option>
        </Select>
        <Text fontWeight="bold" my="1rem">
          Search For Author
        </Text>
        <Input placeholder="Search for Author" />
        <Text fontWeight="bold" my="1rem">
          Post Date
        </Text>
        <Input type="date" />
      </Box>
      <Center
        my="4rem"
        flexDir="column"
        bg="white"
        gap="4rem"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;"
        px={{ base: '0', md: '8rem' }}
        py="2rem"
        w={{ base: 'full', sm: 'max-content' }}
        alignSelf={'center'}
        rounded="md"
        mx="auto"
      >
        <NewPost />
        {data?.posts?.length > 0
          ? data.posts?.map((post) => <Post key={post._id} post={post} />)
          : ListOfPosts.map((post) => <Post key={post.id} post={post} />)}
      </Center>
    </Flex>
  )
}

export default Posts
