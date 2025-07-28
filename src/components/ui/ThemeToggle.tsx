import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import clsx from 'clsx';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor }
  ];

  const currentTheme = themes.find(t => t.value === theme);
  const CurrentIcon = currentTheme?.icon || Monitor;

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <motion.div
          whileHover={{ rotate: 15 }}
          transition={{ duration: 0.2 }}
        >
          <CurrentIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </motion.div>
      </Menu.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            {themes.map((themeOption) => {
              const Icon = themeOption.icon;
              return (
                <Menu.Item key={themeOption.value}>
                  {({ active }) => (
                    <button
                      onClick={() => setTheme(themeOption.value as any)}
                      className={clsx(
                        'flex items-center w-full px-3 py-2 text-sm transition-colors',
                        active ? 'bg-gray-100 dark:bg-gray-700' : '',
                        theme === themeOption.value ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                      )}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {themeOption.label}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}