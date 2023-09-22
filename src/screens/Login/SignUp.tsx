import React, {useState} from 'react';
import {
  Button,
  Checkbox,
  Image,
  HStack,
  VStack,
  ScrollView,
  Text,
  Link,
  Divider,
  Icon,
  Center,
  FormControl,
  Box,
  LinkText,
  Input,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  InputIcon,
  FormControlHelper,
  Toast,
  ToastTitle,
  useToast,
  ButtonIcon,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  ButtonText,
  Heading,
  ArrowLeftIcon,
  InputField,
  InputSlot,
  Pressable,
} from '@gluestack-ui/themed';
import {Controller, useForm} from 'react-hook-form';

import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

import {AlertTriangle, EyeIcon, EyeOffIcon} from 'lucide-react-native';

import {FacebookIcon, GoogleIcon} from './assets/Icons/Social';
import {Keyboard} from 'react-native';

import GuestLayout from '../../layouts/GuestLayout';

import {useNavigation} from '@react-navigation/native';

const signUpSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z
    .string()
    .min(6, 'Must be at least 8 characters in length')
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character',
    ),
  confirmpassword: z
    .string()
    .min(6, 'Must be at least 8 characters in length')
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character',
    ),
  rememberme: z.boolean().optional(),
});
type SignUpSchemaType = z.infer<typeof signUpSchema>;
function SideContainerWeb() {
  return (
    <Center
      flex={1}
      sx={{
        _light: {
          bg: '$primary500',
        },
        _dark: {
          bg: '$primary500',
        },
      }}>
      <Image
        h="$10"
        w="$80"
        alt="gluestack-ui Pro"
        resizeMode="contain"
        source={require('./assets/images/gluestackUiProLogo_web_light.svg')}
      />
    </Center>
  );
}
function MobileHeader() {
  const navigation = useNavigation();

  return (
    <VStack px="$3" mt="$4.5" mb="$5" space="md">
      <HStack space="xs" alignItems="center">
        <Pressable onPress={() => navigation.goBack()}>
          <Icon as={ArrowLeftIcon} color="$textLight50" />
        </Pressable>
        <Text color="$textLight50" fontSize="$lg">
          Sign Up
        </Text>
      </HStack>
      <VStack space="xs" ml="$1" my="$4">
        <Heading fontSize="$3xl" color="$textLight50">
          Welcome
        </Heading>
        <Text
          fontSize="$md"
          fontWeight="normal"
          sx={{
            _light: {
              color: '$primary300',
            },
            _dark: {
              color: '$textDark400',
            },
          }}>
          Sign up to continue
        </Text>
      </VStack>
    </VStack>
  );
}
const SignUpForm = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [pwMatched, setPwMatched] = useState(false);
  const toast = useToast();
  const onSubmit = (_data: SignUpSchemaType) => {
    if (_data.password === _data.confirmpassword) {
      setPwMatched(true);
      toast.show({
        placement: 'bottom right',
        render: ({id}) => {
          return (
            <Toast nativeID={id} variant="accent" action="success">
              <ToastTitle>Signed up successfully</ToastTitle>
            </Toast>
          );
        },
      });
      reset();
    } else {
      toast.show({
        placement: 'bottom right',
        render: ({id}) => {
          return (
            <Toast nativeID={id} action="error">
              <ToastTitle>Passwords do not match</ToastTitle>
            </Toast>
          );
        },
      });
    }
    // Implement your own onSubmit and navigation logic here.
  };
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleState = () => {
    setShowPassword(showState => {
      return !showState;
    });
  };
  const handleConfirmPwState = () => {
    setShowConfirmPassword(showState => {
      return !showState;
    });
  };
  return (
    <>
      <VStack justifyContent="space-between">
        <FormControl
          isInvalid={(!!errors.email || isEmailFocused) && !!errors.email}
          isRequired={true}>
          <Controller
            name="email"
            defaultValue=""
            control={control}
            rules={{
              validate: async value => {
                try {
                  await signUpSchema.parseAsync({email: value});
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input>
                <InputField
                  placeholder="Email"
                  fontSize="$sm"
                  type="text"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon size="sm" as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <FormControl isInvalid={!!errors.password} isRequired={true} my="$6">
          <Controller
            defaultValue=""
            name="password"
            control={control}
            rules={{
              validate: async value => {
                try {
                  await signUpSchema.parseAsync({
                    password: value,
                  });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input>
                <InputField
                  fontSize="$sm"
                  placeholder="Password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                  type={showPassword ? 'text' : 'password'}
                />
                <InputSlot onPress={handleState} pr="$3">
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color="$textDark400"
                  />
                </InputSlot>
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon size="sm" as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.password?.message}
            </FormControlErrorText>
          </FormControlError>
          <FormControlHelper></FormControlHelper>
        </FormControl>
        <FormControl isInvalid={!!errors.confirmpassword} isRequired={true}>
          <Controller
            defaultValue=""
            name="confirmpassword"
            control={control}
            rules={{
              validate: async value => {
                try {
                  await signUpSchema.parseAsync({
                    password: value,
                  });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input>
                <InputField
                  placeholder="Confirm Password"
                  fontSize="$sm"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                  type={showConfirmPassword ? 'text' : 'password'}
                />

                <InputSlot onPress={handleConfirmPwState} pr="$3">
                  <InputIcon
                    as={showConfirmPassword ? EyeIcon : EyeOffIcon}
                    color="$textDark400"
                  />
                </InputSlot>
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon size="sm" as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.confirmpassword?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
      </VStack>
      <Controller
        name="rememberme"
        defaultValue={false}
        control={control}
        render={({field: {onChange, value}}) => (
          <Checkbox
            size="sm"
            value="Remember me"
            isChecked={value}
            onChange={onChange}
            alignSelf="flex-start"
            mt="$5">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel
              sx={{
                _dark: {color: '$warmGray400'},
                _text: {
                  fontSize: '$sm',
                },
              }}>
              I accept the{' '}
              <Link>
                <LinkText
                  sx={{
                    _ios: {
                      marginTop: '$0.5',
                    },
                    _android: {
                      marginTop: '$0.5',
                    },
                  }}>
                  Terms of Use
                </LinkText>
              </Link>{' '}
              &{' '}
              <Link>
                <LinkText
                  sx={{
                    _ios: {
                      marginTop: '$0.5',
                    },
                    _android: {
                      marginTop: '$0.5',
                    },
                  }}>
                  Privacy Policy
                </LinkText>
              </Link>
            </CheckboxLabel>
          </Checkbox>
        )}
      />
      <Button mt="$6" onPress={handleSubmit(onSubmit)} px="$2">
        <ButtonText fontSize="$sm" fontWeight="$medium">
          SIGN UP
        </ButtonText>
      </Button>
    </>
  );
};
function SignUpFormComponent() {
  const navigation = useNavigation();

  return (
    <>
      <Box
        sx={{
          '@md': {
            display: 'none',
          },
        }}
        display="flex">
        <MobileHeader />
      </Box>
      <Box
        flex={1}
        sx={{
          '@md': {
            px: '$8',
            borderTopLeftRadius: '$none',
            borderTopRightRadius: '$none',
            borderBottomRightRadius: '$none',
          },
          _light: {
            bg: '$backgroundLight0',
          },
          _dark: {
            bg: '$backgroundDark800',
          },
        }}
        px="$4"
        py="$8"
        justifyContent="space-between"
        borderTopLeftRadius="$2xl"
        borderTopRightRadius="$2xl"
        borderBottomRightRadius="$none">
        <Text
          sx={{
            '@md': {
              display: 'flex',
            },
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
          display="none"
          fontSize="$2xl"
          fontWeight="bold"
          mb="$8">
          Sign up to continue
        </Text>
        <SignUpForm />
        <HStack
          space="xs"
          sx={{
            '@md': {
              mt: '$4',
            },
          }}
          mt="$6"
          alignItems="center"
          justifyContent="center">
          <Divider
            w="$2/6"
            sx={{
              _light: {
                bg: '$backgroundLight200',
              },
              _dark: {
                bg: '$backgroundDark700',
              },
            }}
          />
          <Text
            fontWeight="medium"
            sx={{
              _light: {
                color: '$textlight400',
              },
              _dark: {
                color: '$textdark300',
              },
            }}>
            or
          </Text>
          <Divider
            w="$2/6"
            sx={{
              _light: {
                bg: '$backgroundLight200',
              },
              _dark: {
                bg: '$backgroundDark700',
              },
            }}
          />
        </HStack>
        <HStack
          space="sm"
          sx={{
            '@md': {
              mt: '$4',
            },
          }}
          mt="$6"
          mb="$9"
          alignItems="center"
          justifyContent="center">
          <Link href="">
            <Button action="secondary" variant="link" onPress={() => {}}>
              <ButtonIcon as={FacebookIcon} size="md" />
            </Button>
          </Link>
          <Link href="">
            <Button action="secondary" variant="link" onPress={() => {}}>
              <ButtonIcon as={GoogleIcon} size="md" />
            </Button>
          </Link>
        </HStack>
        <HStack
          space="xs"
          alignItems="center"
          justifyContent="center"
          mt="auto">
          <Text
            fontSize="$sm"
            color="$backgroundDark500"
            fontWeight="normal"
            sx={{
              _dark: {
                color: '$textDark400',
              },
            }}>
            Already have an account?
          </Text>

          <Pressable
            //@ts-ignore
            onPress={() => navigation.navigate('SignIn')}>
            <Text
              sx={{
                color: '$primary500',
                textDecorationLine: 'none',
                ':hover': {color: '$primary600'},
                fontWeight: '$bold',
              }}
              fontSize="$sm">
              Sign In
            </Text>
          </Pressable>
        </HStack>
      </Box>
    </>
  );
}
export default function SignUp() {
  return (
    <GuestLayout>
      <Box
        sx={{
          '@md': {
            display: 'flex',
          },
        }}
        flex={1}
        display="none">
        <SideContainerWeb />
      </Box>
      <Box flex={1}>
        <SignUpFormComponent />
      </Box>
    </GuestLayout>
  );
}
